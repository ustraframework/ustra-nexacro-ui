//XJS=initialData.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        초기 데이터 세팅 모듈
        /**/
        this.initialDataLoaded = false;

        // 초기 데이터를 로드한다.
        this.loadInitialData = function() {

        	if (this.initialDataLoaded) {
        		return;
        	}

        	this.initialDataLoaded = true;
        	nexacro.setHTTPHeaderVariable("X-Nexacro-Request", "Nexacro17.1");
        	this.transaction(
        		'initData',	// 서비스 구분자
        		'ApiUrl::/api/system/initializing-data', // 호출 주소
        		'', // 전송 데이터셋 아이디
        		'gdsCommonCode=gdsCommonCode gdsFileGroups=gdsFileGroups gdsMenus=gdsMenus', // 바인딩 데이터셋 아이디
        		'', // 전송 변수
        		'callbackInitialData' // callback function
        	);
        	trace('onload')
        // 	nexacro.getApplication().gdsCommonCode.addEventHandler('onload', () => {
        // 		// 데이터 셋 동적 생성
        // 		const ds = new Dataset();
        // 		ds.assign(nexacro.getApplication().gdsCommonCode);
        //
        // 		trace('copied dataset', ds._rawRecords)
        // 	}, this);

        	nexacro.getApplication().axios.post('http://localhost:9403/api/rest/dataset')
        		.then(r=>console.log('data', r.data))
        }

        this.callbackInitialData = function(svcId, errorCode, errorMsg) {
        	if (errorCode === 0) {
        		trace('gdsCommonCode', nexacro.getApplication().gdsCommonCode._rawRecords)
        		trace('gdsMenus', nexacro.getApplication().gdsMenus._rawRecords)
        		trace('gdsFileGroups', nexacro.getApplication().gdsFileGroups._rawRecords)

        		// alert('조회가 완료되었습니다.')

        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
