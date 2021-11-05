(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset

            
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
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"ustra::forms/page/login.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("ustra::forms/page/login.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.mainframe.addEventHandler("onactivate",this.mainframe_onactivate,this);
            this.mainframe.WorkFrame.addEventHandler("onactivate",this.mainframe_WorkFrame_onactivate,this);
        };
        
        // script Compiler
        this.addIncludeScript("App_Desktop.xadl",'ustra::libs/web/app.xjs');
        this.addIncludeScript("App_Desktop.xadl",'ustra::libs/web/ui.xjs');
        this.registerScript("App_Desktop.xadl", function() {
        this.executeIncludeScript('ustra::libs/web/app.xjs'); /*include 'ustra::libs/web/app.xjs'*/;
        this.executeIncludeScript('ustra::libs/web/ui.xjs'); /*include 'ustra::libs/web/ui.xjs'*/;

        var TITLE_BAR_HEIGHT = 111;
        this.Application_onload = function(obj,e)
        {
        	// form 로드 전 title 영역 처리
        	$ustra.events.addEventHandler('before-form-loaded', function(form) {
        		if (form.title) {
        			// adjust component position
        			var components = form.components;
        			for(var i=0; i<components.length; i++) {
        				var component = components[i];

        				if (component.getOffsetLeft && component.getOffsetTop) {
        					component.move(component.getOffsetLeft(), component.getOffsetTop() + TITLE_BAR_HEIGHT );
        				}
        			}

        			// add title div
        			var titleDiv = new Div();
        			titleDiv.init('divTitle', 0, 0, '100%', TITLE_BAR_HEIGHT);
        			titleDiv.async = false;
        			titleDiv.set_url('common::workTitle.xfdl');


        			form.addChild('divTitle', titleDiv);
        			titleDiv.show();
        			titleDiv.form.setTitle(form.title);
        			titleDiv.bringToFront();

        		}
        	}, this);

        	// custom 로딩바 생성
        	$ustra.events.addEventHandler('loading-bar-initialize', function(form) {

        		var loadingBarEl = $('' +
        '<div class="loading-bar" id="ustra-global-loading-indicator">' +
        '	<div class="roading_04">' +
        '    	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-35 -35 70 70" width="80" height="80">' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(45 2 2)">></rect>' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(90 2 2)">></rect>' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(135 2 2)"></rect>' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(180 2 2)"></rect>' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(225 2 2)"></rect>' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(270 2 2)"></rect>' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(315 2 2)"></rect>' +
        '        	<rect y="15%" rx="2" ry="2" height="12" width="4" transform="rotate(360 2 2)"></rect>' +
        '    	</svg>' +
        '	</div>' +
        '</div>').hide();
        		$(document.body).append(loadingBarEl);
        		$ustra.ui.loadingBar._el = loadingBarEl[0];
        	});
        };

        // load css
        $ustra.dom.loadCss('custom', '/ustraConfig/custom.css');

        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::temp_main.xcss");
        this.loadCss("xcssrc::ustra_main.xcss");
        this.loadCss("xcssrc::ustra_validation.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
