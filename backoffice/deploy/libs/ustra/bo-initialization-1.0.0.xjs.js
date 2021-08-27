//XJS=bo-initialization-1.0.0.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,'libs::modules/axios-0.21.1.xjs');
        this.addIncludeScript(path,'libs::ustra/global-1.0.0.xjs');
        this.registerScript(path, function() {
        this.executeIncludeScript('libs::modules/axios-0.21.1.xjs'); /*include 'libs::modules/axios-0.21.1.xjs'*/;
        this.executeIncludeScript('libs::ustra/global-1.0.0.xjs'); /*include 'libs::ustra/global-1.0.0.xjs'*/

        const API_URL_VARIABLE_NAME = 'apiUrl';

        this.bo = function() {
        }

        this.bo.initialized = false;

        // 초기 설정 처리
        this.bo.initialize = function() {

        	if (this.bo.initialized) {
        		return;
        	}
        	this.bo.initialized = true;
        	if (axios) {
        		// axios base url 처리
        		axios.defaults.baseURL = nexacro._getService('apiUrl').url || null;
        		axios.defaults.responseType = 'json';
        		axios.defaults.headers.common['Accept'] = 'application/json';
        	}
        }

        // 초기 데이터 조회
        this.bo.loadInitialData = function() {

        	if (this.bo.initialized) {
        		return;
        	}
        	const storageInitialData = window.sessionStorage.getItem('initial-data');

        	if (storageInitialData) {
        		this.global.setItem('boInitialData', JSON.parse(storageInitialData));
        		return;
        	}

        	axios.post('/api/system/initializing-data')
        		.then(function(res) {
        			if (res.data) {
        				window.sessionStorage.setItem('initial-data', JSON.stringify(res.data.body));
        				this.global.setItem('boInitialData', res.data.body);
        			}
        		})
        };

        if (!nexacro.getApplication()._isLoaded()) {
        	nexacro.getApplication().addEventHandler('onload', function() {
        		this.bo.initialize.call(this);
        		this.bo.loadInitialData.call(this);
        	}, this);
        } else {
        	this.bo.initialize.call(this);
        	this.bo.loadInitialData.call(this);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
