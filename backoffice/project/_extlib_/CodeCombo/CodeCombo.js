//==============================================================================			
//	Define the Component.
//==============================================================================			
//==============================================================================			
// Object : nexacro.CodeCombo			
// Group : Component			
//==============================================================================			
if (!nexacro.CodeCombo)			
{			
    nexacro.CodeCombo = function(id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)			
    {			
        nexacro.Combo.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);			
    };			
        			
    nexacro.CodeCombo.prototype = nexacro._createPrototype(nexacro.Combo, nexacro.CodeCombo);			
    nexacro.CodeCombo.prototype._type_name = "CodeCombo";	
	
	nexacro.CodeCombo.prototype.groupCode = "";
	nexacro.CodeCombo.prototype.set_groupCode = function (v)
	{
		this.groupCode = v;
	};	
	
// 	nexacro.CodeCombo.prototype.on_create_contents = function() {
// 		nexacro.Combo.prototype.on_create_contents.call(this);
// 		
// 		trace(this);
// 	};
	
}	
