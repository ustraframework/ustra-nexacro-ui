//==============================================================================			
//	Define the Component.
//==============================================================================			
//==============================================================================			
// Object : nexacro.CodeCombo3			
// Group : Component			
//==============================================================================			
if (!nexacro.CodeCombo3)			
{			
    nexacro.CodeCombo3 = function(id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)			
    {			
        nexacro._CompositeComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);			
    };			
        			
    nexacro.CodeCombo3.prototype = nexacro._createPrototype(nexacro._CompositeComponent, nexacro.CodeCombo3);			
    nexacro.CodeCombo3.prototype._type_name = "CodeCombo3";	
	
}	
	
	
	/************************************************************************
	FUNCTION : _get_form_module
	DESCRIPTION :
	RETURN :
	************************************************************************/
	nexacro.CodeCombo3.prototype._get_form_module = function ()
	{
		return function()
		{
			if (!this._is_form)
			return;
			
			var obj = null;
			
			this.on_create = function()
			{
				this.set_name("CodeCombo3");
				this.set_titletext("CodeCombo3");
				if (nexacro.Form == this.constructor)
				{
					this._setFormPosition(150,25);
				}
				
				// Object(Dataset, ExcelExportObject) Initialize
				
				
				// UI Components Initialize
				obj = new nexacro.Combo("Combo00","0","0","100%","100%",null,null,null,null,null,null,this);
				obj.set_taborder("0");
				obj.set_text("Combo00");
				this.addChild(obj.name, obj);
				// Layout Functions
				//-- Default Layout : this
				obj = new nexacro.Layout("default","",150,25,this,function(p){});
				this.addLayout(obj.name, obj);
				
				// BindItem Information
				
			};
			
			this.loadPreloadList = function()
			{
				
			};
			
			// User Script
			
			
			// Regist UI Components Event
			this.on_initEvent = function()
			{
				
			};
			this.loadIncludeScript("CodeCombo3.xcdl");
			this.loadPreloadList();
			
			// Remove Reference
			obj = null;
		};
	};