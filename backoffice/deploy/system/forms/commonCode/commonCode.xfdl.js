(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commonCode");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGroupCode", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdDesc\" type=\"string\" size=\"32\"/><Column id=\"cdLen\" type=\"int\" size=\"4\"/><Column id=\"cdNm\" type=\"string\" size=\"32\"/><Column id=\"dtlCd\" type=\"string\" size=\"32\"/><Column id=\"etc1\" type=\"string\" size=\"32\"/><Column id=\"etc2\" type=\"string\" size=\"32\"/><Column id=\"etc3\" type=\"string\" size=\"32\"/><Column id=\"etc4\" type=\"string\" size=\"32\"/><Column id=\"etc5\" type=\"string\" size=\"32\"/><Column id=\"grpCd\" type=\"string\" size=\"32\"/><Column id=\"grpNm\" type=\"string\" size=\"32\"/><Column id=\"lclsCd\" type=\"string\" size=\"32\"/><Column id=\"lclsNm\" type=\"string\" size=\"32\"/><Column id=\"mclsCd\" type=\"string\" size=\"32\"/><Column id=\"mclsNm\" type=\"string\" size=\"32\"/><Column id=\"regUsrId\" type=\"string\" size=\"32\"/><Column id=\"regUsrIp\" type=\"string\" size=\"32\"/><Column id=\"rmk\" type=\"string\" size=\"32\"/><Column id=\"srtNo\" type=\"int\" size=\"4\"/><Column id=\"updUsrId\" type=\"string\" size=\"32\"/><Column id=\"updUsrIp\" type=\"string\" size=\"32\"/><Column id=\"uprDtlCd\" type=\"string\" size=\"32\"/><Column id=\"uprGrpCd\" type=\"string\" size=\"32\"/><Column id=\"useYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#e3e9ed");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","47","14","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("그룹코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbGroupCode","106","16","404","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsGroupCode");
            obj.set_codecolumn("grpCd");
            obj.set_datacolumn("cdText");
            obj.set_type("search");
            obj.set_text("cmbGroupCode");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnNew","516","13","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("신규");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnNew00","580","13","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("수정");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divBody","0","51","100.00%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e3e9ed");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode1","0","0","33.3%","100%",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCode1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"112\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:dtlCd\"/><Cell col=\"1\" text=\"bind:cdNm\"/><Cell col=\"2\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.divBody.addChild(obj.name, obj);

            obj = new Grid("grdCode2","grdCode1:1","0","33.3%","100%",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCode1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"112\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:dtlCd\"/><Cell col=\"1\" text=\"bind:cdNm\"/><Cell col=\"2\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.divBody.addChild(obj.name, obj);

            obj = new Grid("grdCode2_00","grdCode2:1","0","33.3%","100.00%",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsCode1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"112\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:dtlCd\"/><Cell col=\"1\" text=\"bind:cdNm\"/><Cell col=\"2\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.divBody.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("commonCode.xfdl",'libs::ustra/bo-initialization.xjs');
        this.registerScript("commonCode.xfdl", function() {
        this.executeIncludeScript('libs::ustra/bo-initialization.xjs'); /*include 'libs::ustra/bo-initialization.xjs'*/;

        this.commonCode_onload = function(obj,e)
        {
        	this.transaction(
        		'initData',	// 서비스 구분자
        		'apiUrl::/api/system/code/group/list', // 호출 주소
        		'', // 전송 데이터셋 아이디
        		'dsGroupCode=groupList', // 바인딩 데이터셋 아이디
        		'', // 전송 변수
        		'callbackLodedData' // callback function
        	);
        };

        // 대분류 로드
        this.loadCode1 = function() {
        	const grpCd = this.divSearch.form.cmbGroupCode.value;

        	if (!this.loadServiceId) {
        		this.loadServiceId = 0;
        	}

        	this.transaction(
        		'code1',	// 서비스 구분자
        		'apiUrl::/api/system/code/group?serviceId=' + (++this.loadServiceId), // 호출 주소
        		'', // 전송 데이터셋 아이디
        		'dsCode1=list', // 바인딩 데이터셋 아이디
        		'grpCd=' + grpCd, // 전송 변수
        		'callbackLodedData' // callback function
        	);
        }

        // 그룹 코드 변경 시
        this.divSearch_cmbGroupCode_onitemchanged = function(obj,e)
        {
        	this.loadCode1();
        };

        // 그리드 더블 클릭
        this.divBody_grdCode1_oncelldblclick = function(obj,e)
        {
        	this.openInputForm('group', this.dsCode1.getColumn(e.row, 'dtlCd'));
        };

        // 입력 창 오픈
        this.openInputForm = function(type, code) {
        	const childFrame = new ChildFrame();
        	childFrame.init('groupInputPopup', 0, 0, 400, 350, null, null, 'system::forms/commonCode/inputPopup.xfdl');
        	childFrame.set_dragmovetype('all');
        	childFrame.set_openalign('center middle');
        	childFrame.set_overlaycolor('RGBA(196,196,196,0.5)');
        	childFrame.set_titletext('그룹 코드 입력');
        	childFrame.showModal(this.getOwnerFrame(), { code, type }, this, 'callbackPopup');
        }

        // transaction callback
        this.callbackLodedData = function(svcId, errorCode, errorMsg) {
        	if (svcId === 'initData') {

        		// 데이터셋 컬럼 추가
        		this.dsGroupCode.addColumn('cdText', 'String');
        		for(let i=0; i < this.dsGroupCode.getRowCount(); i++) {
        			const grpCd = this.dsGroupCode.getColumn(i, 'grpCd');
        			const cdNm = this.dsGroupCode.getColumn(i, 'cdNm');
        			this.dsGroupCode.setColumn(i, 'cdText', grpCd + ': ' + cdNm);
        		}

        		if (this.dsGroupCode.getRowCount() > 0) {
        			this.divSearch.form.cmbGroupCode.set_value(this.dsGroupCode.getColumn(0, 'grpCd'));
        			this.loadCode1();
        		}
        	}
        }

        // popup callback
        this.callbackPopup = function(popupId, rtn) {

        }

        // 신규 버튼 클릭
        this.divSearch_btnNew_onclick = function(obj,e)
        {
        	this.openInputForm('group', null);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commonCode_onload,this);
            this.divSearch.form.cmbGroupCode.addEventHandler("onitemchanged",this.divSearch_cmbGroupCode_onitemchanged,this);
            this.divSearch.form.btnNew.addEventHandler("onclick",this.divSearch_btnNew_onclick,this);
            this.divBody.form.grdCode1.addEventHandler("oncelldblclick",this.divBody_grdCode1_oncelldblclick,this);
        };
        this.loadIncludeScript("commonCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
