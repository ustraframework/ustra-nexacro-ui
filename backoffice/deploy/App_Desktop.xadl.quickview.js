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
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.addIncludeScript("App_Desktop.xadl",'ustra::libs/web/app.xjs');
        this.addIncludeScript("App_Desktop.xadl",'ustra::libs/web/ui.xjs');
        this.addIncludeScript("App_Desktop.xadl",'ustra::libs/web/auth.xjs');
        this.registerScript("App_Desktop.xadl", function() {
        this.executeIncludeScript('ustra::libs/web/app.xjs'); /*include 'ustra::libs/web/app.xjs'*/;
        this.executeIncludeScript('ustra::libs/web/ui.xjs'); /*include 'ustra::libs/web/ui.xjs'*/;
        this.executeIncludeScript('ustra::libs/web/auth.xjs'); /*include 'ustra::libs/web/auth.xjs'*/;

        var TITLE_BAR_HEIGHT = 111;
        this.Application_onload = function(obj,e)
        {
        	$ustra.app.afterInitialized(function() {
        		if (this.mainframe.WorkFrame) {
        			$ustra.app.getConfig(function(config) {
        				if ($ustra.auth.authenticated()) {
        					this.mainframe.WorkFrame.set_formurl(config.mainPageUrl);
        				} else {
        					this.mainframe.WorkFrame.set_formurl(config.loginPageUrl);
        				}
        			}.bind(this));
        		}
        	});

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
        			titleDiv.init('divTitle', 0, 0, null, TITLE_BAR_HEIGHT, 54);
        			titleDiv.async = false;
        			titleDiv.set_url('common::workTitle.xfdl');



        			form.addChild('divTitle', titleDiv);
        			titleDiv.show();
        			// console.log('titleDiv.form', titleDiv.form.setTitle);
        			// titleDiv.form.setTitle(form.title);
        			titleDiv.bringToFront();

        			// 스크롤바 갱신
        			form.resetScroll();

        		}
        	}, this);

        	// custom 로딩바 생성
        	$ustra.events.addEventHandler('loading-bar-initialize', function(form) {
        		// load css
        		$ustra.dom.loadCss('custom', '/ustraConfig/custom.css');

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



        });
		this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::temp_main.xcss");
        this.loadCss("xcssrc::ustra_main.xcss");
        this.loadCss("xcssrc::ustra_validation.xcss");
    };
}
)();
