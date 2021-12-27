if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::HDEzwel");
        this.set_datatyperule("2.0");
        this.set_userfontid("font::echo.xfont");
        this.set_usecontextmenu("none");
    };
    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "0");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("apiUrl", "none", "http://127.0.0.1:9701", "none", null, "", "0", "0");
        nexacro._addService("ustra", "file", "./ustra/", "none", null, "", "0", "0");
        nexacro._addService("ustraConfig", "file", "./ustraConfig/", "none", null, "", "0", "0");
        nexacro._addService("order", "form", "./order/", "session", null, "", "0", "0");
        nexacro._addService("template", "form", "./template/", "session", null, "", "0", "0");
        nexacro._addService("commons", "form", "./commons/", "session", null, "", "0", "0");
        nexacro._addService("system", "form", "./system/", "session", null, "", "0", "0");
        nexacro._addService("shopAdmin", "file", "./shopAdmin/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header
        nexacro.setHTTPHeaderVariable("X-Nexacro-Request", "Nexacro17.1");
    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script
    env.registerScript("environment.xml", function() {
    this.Environment_onerror = function(obj,e)
    {
    	try {
    		console.log(e);
    		// 인증 관련 오류
    		if (e.fromreferenceobject && e.statuscode === 401) {
    			$ustra.app.getConfig(function(config) {
    				alert(e.errormsg, '인증 오류', 'auth', function() {
    					try {
    						$ustra.popup.closeAll();
    					} catch(e) {
    					}
    					if ($ustra.app.getMainFrame()) {
    						$ustra.app.getMainFrame().form.go(config.loginPageUrl);
    					} else {
    						e.fromreferenceobject.go(config.loginPageUrl);
    					}
    					// e.fromreferenceobject.go(config.loginPageUrl);
    				});
    			});
    			return;
    		}

    		// 화면 이동
    		else if (e.errorobj && e.errorobj.moveToErrorPage) {
    			$ustra.app.getConfig(function(config) {

    				if ($ustra.app.getMainFrame()) {
    					$ustra.app.getMainFrame().form.go(config.errorPageUrl);
    				} else {
    					e.fromreferenceobject.go(config.errorPageUrl);
    				}
    			});
    		} else {
    			alert(e.errormsg, '오류 발생', 'error');
    		}
    	} catch(e) {
    		console.error(e);
    	}
    };

    });
					
    env = null;
}
