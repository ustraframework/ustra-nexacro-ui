//XJS=bo-initialization.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,'libs::modules/axios-0.21.1.xjs');
        this.addIncludeScript(path,'libs::ustra/core.xjs');
        this.addIncludeScript(path,'libs::ustra/global.xjs');
        this.addIncludeScript(path,'libs::ustra/events.xjs');
        this.registerScript(path, function() {
        this.executeIncludeScript('libs::modules/axios-0.21.1.xjs'); /*include 'libs::modules/axios-0.21.1.xjs'*/;
        this.executeIncludeScript('libs::ustra/core.xjs'); /*include 'libs::ustra/core.xjs'*/
        this.executeIncludeScript('libs::ustra/global.xjs'); /*include 'libs::ustra/global.xjs'*/
        this.executeIncludeScript('libs::ustra/events.xjs'); /*include 'libs::ustra/events.xjs'*/

        const API_URL_VARIABLE_NAME = 'apiUrl';
        const BO_INITIALIZED_EVENT_NAME = 'bo-initial-data-loaded';

        $ustra.module('bo', {

        	/**
        	/* 초기화 완료 여부
        	*/
        	_initialized: false,

        	/**
        	/* 백오피스 초기화
        	/*
        	**/
        	_initialize: function() {

        		if ($ustra.bo._initialized) {
        			return;
        		}
        		$ustra.bo._initialized = true;

        		if (axios) {
        			// axios base url 처리
        			axios.defaults.baseURL = nexacro._getService('apiUrl').url || null;
        			axios.defaults.responseType = 'json';
        			axios.defaults.headers.common['Accept'] = 'application/json';
        		}

        		$ustra.bo._loadInitialData();
        	},

        	/**
        	/* 백오피스 초기 데이터 로딩
        	/*
        	**/
        	_loadInitialData: function() {

        		const storageInitialData = window.sessionStorage.getItem('initial-data');

        		if (storageInitialData) {
        			$ustra.global.setItem('boInitialData', JSON.parse(storageInitialData));
        			$ustra.events.fireEvent(BO_INITIALIZED_EVENT_NAME);
        			return;
        		}

        		axios.post('/api/system/initializing-data')
        			.then((res) => {
        				if (res.data) {
        					window.sessionStorage.setItem('initial-data', JSON.stringify(res.data.body));
        					$ustra.global.setItem('boInitialData', res.data.body);
        					$ustra.events.fireEvent(BO_INITIALIZED_EVENT_NAME);
        				}
        			})
        			.catch((err) => {
        				console.error('초기 데이터 조회 중 오류가 발생하였습니다.', err)
        			});
        	}
        });

        $ustra.events.addApplicationGlobalEventName(BO_INITIALIZED_EVENT_NAME);
        if (!nexacro.getApplication()._isLoaded() && !$ustra.core.isQuickViewUrl()) {
        	nexacro.getApplication().addEventHandler('onload', function(obj) {
        		$ustra.bo._initialize.call(obj);
        	}, this);
        } else {
        	$ustra.bo._initialize.call(nexacro.getApplication());
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
