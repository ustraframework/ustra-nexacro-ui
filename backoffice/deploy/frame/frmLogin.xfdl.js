(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Combo("Combo00","193","217","209","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("gdsCommonCode");
            obj.set_codecolumn("cdNm");
            obj.set_datacolumn("dtlCd");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","191","297","212","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new CodeCombo("CodeCombo00","195","138","203","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_groupCode("SYS_CD");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {

        this.loadDataset = function() {
        	const ds = nexacro.getApplication().gdsCommonCode;

        	if (!ds) {
        		console.warn('gdsCommonCode 데이터셋을 찾을 수 없습니다.');
        		return;
        	}

        	const comboDs = nexacro.getApplication().gdsCommonCode.createDataset(
        		'comboDs',
        		['grpCd','dtlCd','cdNm','cdtext:cdNm','useYn'],
        		`grpCd=='SYS_CD' && dtlCd != '*'`);

        	for(let i=0; i < comboDs.getRowCount(); i++) {
        		const dtlCd = comboDs.getColumn(i, 'dtlCd');
        		const cdNm = comboDs.getColumn(i, 'cdNm');
        		comboDs.setColumn(i, 'cdtext', '(' + dtlCd + ') ' + cdNm);
        	}


        	comboDs.insertRow(0);
        	comboDs.setColumn(comboDs.rowposition, 'dtlCd', null);
        	comboDs.setColumn(comboDs.rowposition, 'cdtext', '전체');




        	this.addChild('comboDs', comboDs);

        	// console.log('comboDs', this.lookup('comboDs'));


        	this.Combo01.set_innerdataset('comboDs');
        	this.Combo01.set_datacolumn('cdtext');
        	this.Combo01.set_codecolumn('dtlCd');
        	this.Combo01.set_value(null);


        }

        this.frmLogin_oninit = function(obj,e)
        {
        	const ds = nexacro.getApplication().gdsCommonCode;
        	ds.addEventHandler('onload', this.loadDataset, this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.frmLogin_oninit,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
