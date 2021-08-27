//==============================================================================			
//	Define the Component.
//==============================================================================			
//==============================================================================			
// Object : nexacro.CodeCombo2			
// Group : Component			
//==============================================================================			
if (!nexacro.CodeCombo2)			
{			
    nexacro.CodeCombo2 = function(id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)			
    {			
        nexacro.Combo.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);			
    };			
        			
    nexacro.CodeCombo2.prototype = nexacro._createPrototype(nexacro.Combo, nexacro.CodeCombo2);			
    nexacro.CodeCombo2.prototype._type_name = "CodeCombo2";	
	
}	
