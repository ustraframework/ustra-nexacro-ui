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
        this.registerScript("App_Desktop.xadl", function() {
        this.executeIncludeScript('ustra::libs/web/app.xjs'); /*include 'ustra::libs/web/app.xjs'*/;

        var TITLE_BAR_HEIGHT = 111;
        this.Application_onload = function(obj,e)
        {
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
        	}, this)
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
