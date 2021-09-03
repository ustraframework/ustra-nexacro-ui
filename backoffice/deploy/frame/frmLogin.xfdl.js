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
            obj.set_tooltiptext("asdfasdfasdfasdf");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","191","297","212","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("dtlCd");
            obj.set_datacolumn("cdNm");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","490","217","212","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("dtlCd");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("전체");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","221","123","239","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("공통코드 등록 화면 이동");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","25","200","150",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
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
        this.addIncludeScript("frmLogin.xfdl",'ustra::libs/web/app.xjs');
        this.addIncludeScript("frmLogin.xfdl",'ustra::libs/web/component-combo.xjs');
        this.addIncludeScript("frmLogin.xfdl",'ustra::libs/web/validation.xjs');
        this.registerScript("frmLogin.xfdl", function() {
        this.executeIncludeScript('ustra::libs/web/app.xjs'); /*include 'ustra::libs/web/app.xjs'*/
        this.executeIncludeScript('ustra::libs/web/component-combo.xjs'); /*include 'ustra::libs/web/component-combo.xjs'*/
        this.executeIncludeScript('ustra::libs/web/validation.xjs'); /*include 'ustra::libs/web/validation.xjs'*/

        this.loadDataset = function() {
        // 	const ds = nexacro.getApplication().gdsCommonCode;
        //
        // 	if (!ds) {
        // 		console.warn('gdsCommonCode 데이터셋을 찾을 수 없습니다.');
        // 		return;
        // 	}
        //
        // 	const comboDs = nexacro.getApplication().gdsCommonCode.createDataset(
        // 		'comboDs',
        // 		['grpCd','dtlCd','cdNm','cdtext:cdNm','useYn'],
        // 		`grpCd=='SYS_CD' && dtlCd != '*'`);
        //
        // 	for(let i=0; i < comboDs.getRowCount(); i++) {
        // 		const dtlCd = comboDs.getColumn(i, 'dtlCd');
        // 		const cdNm = comboDs.getColumn(i, 'cdNm');
        // 		comboDs.setColumn(i, 'cdtext', '(' + dtlCd + ') ' + cdNm);
        // 	}
        //
        //
        // 	comboDs.insertRow(0);
        // 	comboDs.setColumn(comboDs.rowposition, 'dtlCd', null);
        // 	comboDs.setColumn(comboDs.rowposition, 'cdtext', '전체');
        //
        //
        //
        //
        // 	this.addChild('comboDs', comboDs);
        //
        // 	// console.log('comboDs', this.lookup('comboDs'));
        //
        //
        // 	this.Combo01.set_innerdataset('comboDs');
        // 	this.Combo01.set_datacolumn('cdtext');
        // 	this.Combo01.set_codecolumn('dtlCd');
        // 	this.Combo01.set_value(null);


        }

        this.frmLogin_oninit = function(obj,e)
        {
        // 	const ds = nexacro.getApplication().gdsCommonCode;
        // 	ds.addEventHandler('onload', this.loadDataset, this);
        };

        this.frmLogin_onload = function(obj,e)
        {
        	$ustra.component.combo.bindCode(this.Combo01, 'SYS_CD');
        	$ustra.component.combo.bindCode(this.Combo02, 'IF_TY_CD', { displaynulltext: '전체' });

        	// this.validateComponent2(this.Combo01);
        	$ustra.validation.registerComponents(this);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.go('ustra::forms/cmnCd/index.xfdl');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.frmLogin_oninit,this);
            this.addEventHandler("onload",this.frmLogin_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
