//XJS=global.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,'libs::ustra/core.xjs');
        this.registerScript(path, function() {
        this.executeIncludeScript('libs::ustra/core.xjs'); /*include 'libs::ustra/core.xjs'*/

        $ustra.module('global-storage', {});
        $ustra.module('global', {
        	/**
        	/* 고유 키 값 생성
        	/* @param length 길이 (number)
        	/*
        	/* @return 키 값 (string)
        	**/
        	uniqueKey: function(length) {
        		var result           = '';
        		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        		var charactersLength = characters.length;
        		for ( var i = 0; i < length; i++ ) {
        		  result += characters.charAt(Math.floor(Math.random() * charactersLength));
        	   }
        	   return result;
        	},

        	/**
        	/* 전역 데이터 저장
        	/* @param key 키 값 (string)
        	/* @param data 데이터 값 (any)
        	/*
        	/* @return 키 값 (string)
        	**/
        	setItem: function (key, data) {
        		$ustra.module('global-storage')[key] = data;
        	},

        	/**
        	/* 전역 데이터 조회
        	/* @param key 키 값 (string)
        	/*
        	/* @return 데이터 값 (any)
        	**/
        	getItem: function (key) {
        		return $ustra.module('global-storage')[key];
        	}
        });


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
