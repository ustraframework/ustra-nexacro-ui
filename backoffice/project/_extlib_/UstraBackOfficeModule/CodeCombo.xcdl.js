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
        nexacro._CompositeComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);			
    };			
        			
    nexacro.CodeCombo.prototype = nexacro._createPrototype(nexacro._CompositeComponent, nexacro.CodeCombo);			
    nexacro.CodeCombo.prototype._type_name = "CodeCombo";	
	
	nexacro.CodeCombo.prototype.groupCode = "";
	nexacro.CodeCombo.prototype.set_groupCode = function (v)
	{
		this.groupCode = v;
	};	
	
	const loadDataset = function() {
		const ds = nexacro.getApplication().gdsCommonCode;
		
		if (!ds) {
			console.warn('gdsCommonCode 데이터셋을 찾을 수 없습니다.');
			return;
		}
		
		const comboDs = new Dataset();
		comboDs.assign(nexacro.getApplication().gdsCommonCode);
		comboDs.filter("grpCd=='" + this.groupCode + "' && dtlCd != '*'");
		
		
		this.form.addChild('comboDs', comboDs);
		this.form.Combo00.set_innerdataset('comboDs');
		this.form.Combo00.set_datacolumn('cdNm');
		this.form.Combo00.set_codecolumn('dtlCd');		
	}
	
	
	/************************************************************************
	FUNCTION : on_create_contents
	DESCRIPTION : 모듈의 컨텐츠 구성에 필요한 정보를 설정합니다. 이 시점에서는 컨텐츠가 실제로 생성되지 않습니다.
	PARAMETER : void
	RETURN : void
	************************************************************************/
	nexacro.CodeCombo.prototype.on_create_contents = function ()
	{
		nexacro._CompositeComponent.prototype.on_create_contents.call(this);
		const ds = nexacro.getApplication().gdsCommonCode;
		
		if (this.groupCode && ds) {
			if (ds._rawRecords.length < 1) {
				ds.addEventHandler('onload', loadDataset, this);
			} else {
				loadDataset();
			}
		}
		
	};	
	
	
}	
	
	
	/************************************************************************
	FUNCTION : _get_form_module
	DESCRIPTION :
	RETURN :
	************************************************************************/
	nexacro.CodeCombo.prototype._get_form_module = function ()
	{
		return function()
		{
			if (!this._is_form)
			return;
			
			var obj = null;
			
			this.on_create = function()
			{
				this.set_name("CodeCombo");
				this.set_titletext("CodeCombo");
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
			this.loadIncludeScript("CodeCombo.xcdl");
			this.loadPreloadList();
			
			// Remove Reference
			obj = null;
		};
	};