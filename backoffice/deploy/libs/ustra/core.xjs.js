//XJS=core.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // if (!$ustra) {
        	$ustra = {};
        // }


        /**
        /* 모듈을 등록하거나 조회한다.
        /* @param name 모듈 명
        /* @param desc 등록 모듈 상세 (object | function) (optional)
        /* @param parent 등록 object (optional)
        /*
        /* @return 모듈 (object | function)
        **/
        $ustra.module = (name, desc, parent) => {

        	parent = parent || $ustra

        	if (typeof desc === 'undefined') {
        		return parent[name] || {};
        	}

        	if (parent[name] && typeof desc === 'function') {
        		return parent[name];
        	}

        	if (!parent[name]) {
        		parent[name] = {};
        	}

        	if (typeof desc === 'function') {
        		parent[name][key] = desc;
        	} else {
        		for(var key in desc) {
        			if (!parent[name][key]) {
        				parent[name][key] = desc[key];
        			}
        		}
        	}

        	return parent[name] || {};
        }

        // prototype singleton 으로 모듈을 등록한다.
        /**
        /* prototype singleton 으로 모듈을 등록한다.
        /* @param name 모듈 명
        /* @param desc 등록 모듈 상세 (object)
        /*
        /* @return 모듈 (object | function)
        **/
        $ustra.singleton = (name, desc) => {

        	if ($ustra[name]) {
        		return $ustra[name];
        	}

        	var func = function() {}

        	for(var key in desc) {
        		func.prototype[key] = desc[key];
        	}

        	$ustra[name] = new func();
        	return $ustra[name];
        }

        $ustra.module('core', {
        	// quickview url인지 판단
        	isQuickViewUrl: function() {
        		return window.location.href.includes('quickview.html');
        	}
        });

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
