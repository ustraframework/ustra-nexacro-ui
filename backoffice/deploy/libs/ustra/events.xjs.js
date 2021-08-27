//XJS=events.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,'libs::ustra/core.xjs');
        this.addIncludeScript(path,'libs::ustra/global.xjs');
        this.registerScript(path, function() {
        this.executeIncludeScript('libs::ustra/core.xjs'); /*include 'libs::ustra/core.xjs'*/
        this.executeIncludeScript('libs::ustra/global.xjs'); /*include 'libs::ustra/global.xjs'*/


        $ustra.singleton('events', {

        	// 어플리케이션 이벤트 명
        	_applicationGlobalEventNames: [],

        	/**
        	/* application 주기 상 한번만 호출되는 이벤트 명 정의
        	/* 등록 시에는 이벤트가 이미 발생된 경우, addEventHandler 시 자동으로 호출한다.
        	/* @param name 등록 이벤트 명
        	**/
        	addApplicationGlobalEventName: function(name) {
        		var index = this._applicationGlobalEventNames.findIndex(n => n.name === name);

        		if (index > -1) {
        			return
        		}

        		this._applicationGlobalEventNames.push({ name, called: false });
        	},

        	/**
        	/* 글로벌 이벤트 호출 여부 조회
        	/* @param name 이벤트 명
        	/*
        	/* @return 호출여부 (boolean)
        	**/
        	_isCalledGlobalEvent: function(name) {
        		var index = this._applicationGlobalEventNames.findIndex(n => n.name === name);

        		if (index < 0) {
        			return false;
        		}

        		return !!this._applicationGlobalEventNames[index].called;
        	},

        	/**
        	/* 글로벌 이벤트에 저장할 이벤트 명 조회
        	/* @param name 이벤트 명
        	/*
        	/* @return 글로벌 이벤트 명 (string)
        	**/
        	_getGlobalEventName: function(name) {
        		return 'event-handler-' + name;
        	},

        	/**
        	/* 이벤트 핸들러 목록 조회
        	/* @param name 이벤트 명
        	/*
        	/* @return 핸들러 목록 (array)
        	**/
        	_getEventHandlers: function(name) {
        		return $ustra.global.getItem(this._getGlobalEventName(name)) || [];
        	},

        	/**
        	/* 이벤트 핸들러 추가
        	/* @param name 이벤트 명
        	/* @param handler 핸들러 (function)
        	/* @scope 호출 scope (optional)
        	/* @once 한번만 호출 여부 (optional, default: false)
        	/*
        	/* @return 핸들러 키 (string)
        	**/
        	addEventHandler: function (name, handler, scope, once) {

        		if (this._isCalledGlobalEvent(name)) {
        			if (scope) {
        				handler.call(scope);
        			} else {
        				handler();
        			}
        			return;
        		}

        		var key = this._getGlobalEventName(name);
        		var handlers = this._getEventHandlers(name);
        		var handlerKey = $ustra.global.uniqueKey(13);

        		handlers.push({ handler, scope, key: handlerKey, once: once });
        		$ustra.global.setItem(key, handlers);

        		return handlerKey;
        	},

        	/**
        	/* 이벤트 핸들러 제거
        	/* @param name 이벤트 명
        	/* @param handlerKey 핸들러 키 (addEventHandler 호출 값)
        	/*
        	/* @return 핸들러 키 (string)
        	**/
        	removeEventHandler: function (name, handlerKey) {
        		var key = this._getGlobalEventName(name);
        		var handlers = this._getEventHandlers(name);

        		var index = handlers.findIndex(handler=>handler.key === handlerKey);
        		if (index >= 0) {
        			handlers.splice(index, 1);
        		}
        	},

        	/**
        	/* 이벤트 발생
        	/* @param name 이벤트 명
        	/* @param arg argument 객체
        	**/
        	fireEvent: function (name, arg) {
        		var key = this._getGlobalEventName(name);
        		var handlers = this._getEventHandlers(name);

        		handlers.forEach(handler=> {
        			if (handler.scope) {
        				handler.handler.call(scope, arg);
        			} else {
        				handler.handler(arg);
        			}
        		});

        		handlers = handlers.filter(handler=>!handler.once);
        		$ustra.global.setItem(key, handlers);
        	}

        });



        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
