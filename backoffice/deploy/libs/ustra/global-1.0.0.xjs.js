//XJS=global-1.0.0.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.global = function() {
        };

        // 고유 키 값 생성
        this.global.uniqueKey = function(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
           return result;
        }


        // 데이터 저장
        this.global.setItem = function (key, data) {
        	if (!window['$ustra']) {
        		window['$ustra'] = {}
        	}

        	window['$ustra'][key] = data;
        };

        // 데이터 조회
        this.global.getItem = function (key) {
        	return window['$ustra'][key];
        }

        // event 추가
        this.global.addEventHandler = function (name, handler, scope) {
        	var key = 'event-handler-' + name;
        	var handlers = this.global.getItem(key) || [];
        	var handlerKey = this.global.uniqueKey(13);

        	handlers.push({ handler, scope, key: handlerKey });
        	this.global.setItem(key, handlers);

        	return handlerKey;
        }

        // event 추가 (once)
        this.global.addEventHandlerOnce = function (name, handler, scope) {
        	var key = 'event-handler-' + name;
        	var handlers = this.global.getItem(key) || [];
        	var handlerKey = this.global.uniqueKey(13);

        	handlers.push({ handler, scope, key: handlerKey, once: true });
        	return handlerKey;
        }

        // event 제거
        this.global.removeEventHandler = function (name, key) {
        	var key = 'event-handler-' + name;
        	var handlers = this.global.getItem(key) || [];

        	var index = handlers.findIndex(handler=>handler.key === key);

        	if (index >= 0) {
        		handlers.splice(index, -1);
        	}
        }

        // 이벤트 발생
        this.global.fireEvent = function (name, arg) {
        	var key = 'event-handler-' + name;
        	var handlers = this.global.getItem(key) || [];

        	handlers.forEach(handler=> {
        		if (handler.scope) {
        			handler.call(scope, arg);
        		}
        	});

        	handlers = handlers.filter(handler=>!handler.once);
        	this.global.setItem(key, handlers);
        }


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
