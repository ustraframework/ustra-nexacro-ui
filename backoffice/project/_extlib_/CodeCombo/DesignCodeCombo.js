//==============================================================================
//	Define the code to be applied in the Form Design of nexacrostudio.
//==============================================================================
//==============================================================================
// Object : nexacro.CodeCombo
// Group : Component
//==============================================================================
if (nexacro.CodeCombo)
{
	//==============================================================================
	// nexacro.CodeCombo
	//==============================================================================
	nexacro.CodeCombo = function(id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)			
    {			
        nexacro.Combo.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);			
    };			
        			
    nexacro.CodeCombo.prototype = nexacro._createPrototype(nexacro.Combo, nexacro.CodeCombo);			
    nexacro.CodeCombo.prototype._type_name = "CodeCombo";	
}
