(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsCommonCode", this);
            obj.addEventHandler("onload",this.gdsCommonCode_onload,this);
            obj._setContents("<ColumnInfo><Column id=\"cdDesc\" type=\"string\" size=\"32\"/><Column id=\"cdLen\" type=\"int\" size=\"4\"/><Column id=\"cdNm\" type=\"string\" size=\"32\"/><Column id=\"dtlCd\" type=\"string\" size=\"32\"/><Column id=\"etc1\" type=\"string\" size=\"32\"/><Column id=\"etc2\" type=\"string\" size=\"32\"/><Column id=\"etc3\" type=\"string\" size=\"32\"/><Column id=\"etc4\" type=\"string\" size=\"32\"/><Column id=\"etc5\" type=\"string\" size=\"32\"/><Column id=\"grpCd\" type=\"string\" size=\"32\"/><Column id=\"grpNm\" type=\"string\" size=\"32\"/><Column id=\"lclsCd\" type=\"string\" size=\"32\"/><Column id=\"lclsNm\" type=\"string\" size=\"32\"/><Column id=\"mclsCd\" type=\"string\" size=\"32\"/><Column id=\"mclsNm\" type=\"string\" size=\"32\"/><Column id=\"regUsrId\" type=\"string\" size=\"32\"/><Column id=\"regUsrIp\" type=\"string\" size=\"32\"/><Column id=\"rmk\" type=\"string\" size=\"32\"/><Column id=\"srtNo\" type=\"int\" size=\"4\"/><Column id=\"updUsrId\" type=\"string\" size=\"32\"/><Column id=\"updUsrIp\" type=\"string\" size=\"32\"/><Column id=\"uprDtlCd\" type=\"string\" size=\"32\"/><Column id=\"uprGrpCd\" type=\"string\" size=\"32\"/><Column id=\"useYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsFileGroups", this);
            obj._setContents("<ColumnInfo><Column id=\"delYn\" type=\"string\" size=\"32\"/><Column id=\"dirStructCd\" type=\"string\" size=\"32\"/><Column id=\"extenLmt\" type=\"string\" size=\"32\"/><Column id=\"fileGrpId\" type=\"string\" size=\"32\"/><Column id=\"fileGrpNm\" type=\"string\" size=\"32\"/><Column id=\"fileNmSvMethCd\" type=\"string\" size=\"32\"/><Column id=\"maxSz\" type=\"bigdecimal\" size=\"8\"/><Column id=\"regUsrId\" type=\"string\" size=\"32\"/><Column id=\"regUsrIp\" type=\"string\" size=\"32\"/><Column id=\"svPath\" type=\"string\" size=\"32\"/><Column id=\"updUsrId\" type=\"string\" size=\"32\"/><Column id=\"updUsrIp\" type=\"string\" size=\"32\"/><Column id=\"useYn\" type=\"string\" size=\"32\"/><Column id=\"webDefUrl\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenus", this);
            obj._setContents("<ColumnInfo><Column id=\"authScopCd\" type=\"string\" size=\"32\"/><Column id=\"delYn\" type=\"string\" size=\"32\"/><Column id=\"dpYn\" type=\"string\" size=\"32\"/><Column id=\"fileFmtCont\" type=\"string\" size=\"32\"/><Column id=\"fileNm\" type=\"string\" size=\"32\"/><Column id=\"iconFileId\" type=\"string\" size=\"32\"/><Column id=\"iconSrc\" type=\"string\" size=\"32\"/><Column id=\"ipList\" type=\"string\" size=\"32\"/><Column id=\"ipLmtYn\" type=\"string\" size=\"32\"/><Column id=\"mnuDesc\" type=\"string\" size=\"32\"/><Column id=\"mnuId\" type=\"string\" size=\"32\"/><Column id=\"mnuNm\" type=\"string\" size=\"32\"/><Column id=\"mnuSrtNo\" type=\"int\" size=\"4\"/><Column id=\"mnuStepNo\" type=\"int\" size=\"4\"/><Column id=\"mnuTyCd\" type=\"string\" size=\"32\"/><Column id=\"mnuUrl\" type=\"string\" size=\"32\"/><Column id=\"proIdVal\" type=\"string\" size=\"32\"/><Column id=\"prvViewYn\" type=\"string\" size=\"32\"/><Column id=\"regUsrId\" type=\"string\" size=\"32\"/><Column id=\"regUsrIp\" type=\"string\" size=\"32\"/><Column id=\"svPath\" type=\"string\" size=\"32\"/><Column id=\"sysCd\" type=\"string\" size=\"32\"/><Column id=\"updUsrId\" type=\"string\" size=\"32\"/><Column id=\"updUsrIp\" type=\"string\" size=\"32\"/><Column id=\"uprMnuId\" type=\"string\" size=\"32\"/><Column id=\"useYn\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("U.STRA Framework Nexacro");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"system::forms/commonCode/commonCode.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("system::forms/commonCode/commonCode.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onloadforms",this.Application_onloadforms,this);
            this.addEventHandler("onloadingappvariables",this.Application_onloadingappvariables,this);
            this.mainframe.addEventHandler("onactivate",this.mainframe_onactivate,this);
            this.mainframe.WorkFrame.addEventHandler("onactivate",this.mainframe_WorkFrame_onactivate,this);
        };
        
        // script Compiler
        this.addIncludeScript("App_Desktop.xadl",'libs::modules/jquery-3.6.0.xjs');
        this.addIncludeScript("App_Desktop.xadl",'libs::ustra/bo-initialization.xjs');
        this.registerScript("App_Desktop.xadl", function() {
        this.executeIncludeScript('libs::modules/jquery-3.6.0.xjs'); /*include 'libs::modules/jquery-3.6.0.xjs'*/;
        this.executeIncludeScript('libs::ustra/bo-initialization.xjs'); /*include 'libs::ustra/bo-initialization.xjs'*/;

        this.Application_onload = function(obj,e)
        {
        // 	this.backoffice.initialize.call(this);
        // 	this.backoffice.loadInitialData.call(this);
        };

        this.Application_onloadforms = function(obj,e)
        {
        	console.log('Application_onloadforms');
        };

        this.mainframe_WorkFrame_onactivate = function(obj,e)
        {
        	console.log('mainframe_WorkFrame_onactivate');
        };

        this.mainframe_onactivate = function(obj,e)
        {
        	console.log('mainframe_WorkFrame_onactivate');
        };

        this.Application_onloadingappvariables = function(obj,e)
        {
        	console.log('Application_onloadingappvariables');
        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::temp_main.xcss");
        this.loadCss("xcssrc::ustra_main.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
