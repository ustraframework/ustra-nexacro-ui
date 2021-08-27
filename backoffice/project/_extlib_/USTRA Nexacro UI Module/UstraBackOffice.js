include 'axios-0.21.1.js';

//==============================================================================		
//	Define the Object.	
//==============================================================================		
//==============================================================================		
// Object : nexacro.UstraBackOffice		
// Group : Object		
//==============================================================================		
if (!nexacro.UstraBackOffice)		
{		
    nexacro.UstraBackOffice = function(id, parent)		
    {		
        nexacro.Object.call(this, id, parent);		
    };		
        		
    nexacro.UstraBackOffice.prototype = nexacro._createPrototype(nexacro.Object, nexacro.UstraBackOffice);		
    nexacro.UstraBackOffice.prototype._type_name = "UstraBackOffice";		
	
	//===============================================================		
    // nexacro.UstraBackOffice : Create & Destroy		
    //===============================================================		
	nexacro.UstraBackOffice.prototype.destroy = function()		
	{	
		nexacro.Object.prototype.destroy.call(this);
	};	
	
}		
