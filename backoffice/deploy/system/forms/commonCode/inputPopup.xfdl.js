(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("inputPopup");
            this.set_titletext("New Form");
            this.set_dragscrolltype("all");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsForm", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cdDesc\" type=\"string\" size=\"32\"/><Column id=\"cdLen\" type=\"int\" size=\"4\"/><Column id=\"cdNm\" type=\"string\" size=\"32\"/><Column id=\"dtlCd\" type=\"string\" size=\"32\"/><Column id=\"etc1\" type=\"string\" size=\"32\"/><Column id=\"etc2\" type=\"string\" size=\"32\"/><Column id=\"etc3\" type=\"string\" size=\"32\"/><Column id=\"etc4\" type=\"string\" size=\"32\"/><Column id=\"etc5\" type=\"string\" size=\"32\"/><Column id=\"grpCd\" type=\"string\" size=\"32\"/><Column id=\"grpNm\" type=\"string\" size=\"32\"/><Column id=\"lclsCd\" type=\"string\" size=\"32\"/><Column id=\"lclsNm\" type=\"string\" size=\"32\"/><Column id=\"mclsCd\" type=\"string\" size=\"32\"/><Column id=\"mclsNm\" type=\"string\" size=\"32\"/><Column id=\"regUsrId\" type=\"string\" size=\"32\"/><Column id=\"regUsrIp\" type=\"string\" size=\"32\"/><Column id=\"rmk\" type=\"string\" size=\"32\"/><Column id=\"srtNo\" type=\"int\" size=\"4\"/><Column id=\"updUsrId\" type=\"string\" size=\"32\"/><Column id=\"updUsrIp\" type=\"string\" size=\"32\"/><Column id=\"uprDtlCd\" type=\"string\" size=\"32\"/><Column id=\"uprGrpCd\" type=\"string\" size=\"32\"/><Column id=\"useYn\" type=\"string\" size=\"32\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBody","10","10",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","0","0","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("0");
            obj.set_text("코드");
            this.divBody.addChild(obj.name, obj);

            obj = new Edit("edCode","staCode:0","0",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("1");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staName","0","35","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("2");
            obj.set_text("코드명");
            this.divBody.addChild(obj.name, obj);

            obj = new Edit("edCdNm","staName:0","35",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("3");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staSrtNo","0","70","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("4");
            obj.set_text("정렬순번");
            this.divBody.addChild(obj.name, obj);

            obj = new Spin("Spin00","staSrtNo:0","70",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("5");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staUseYn","0","105","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            this.divBody.addChild(obj.name, obj);

            obj = new Radio("Radio00","staUseYn:0","105","160","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divBody_form_Radio00_innerdataset = new nexacro.NormalDataset("divBody_form_Radio00_innerdataset", obj);
            divBody_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divBody_form_Radio00_innerdataset);
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staDesc","0","138","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("8");
            obj.set_text("코드설명");
            this.divBody.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","staDesc:0","140",null,"80","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("9");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staEtc1","0","230","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("10");
            obj.set_text("기타필드1");
            this.divBody.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","staEtc1:0","230",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("11");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staEtc2","0","265","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("12");
            obj.set_text("기타필드2");
            this.divBody.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","staEtc2:0","265",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("13");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staEtc3","0","300","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("14");
            obj.set_text("기타필드3");
            this.divBody.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","staEtc3:0","300",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("15");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staEtc4","0","335","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("16");
            obj.set_text("기타필드4");
            this.divBody.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","staEtc4:0","335",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("17");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("staEtc5","0","370","80","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("18");
            obj.set_text("기타필드5");
            this.divBody.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","staEtc5:0","370",null,"25","0",null,null,null,null,null,this.divBody.form);
            obj.set_taborder("19");
            this.divBody.addChild(obj.name, obj);

            obj = new Div("divBottom","0","divBody:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#e3e9ed");
            this.addChild(obj.name, obj);

            obj = new Button("btnRemove",null,"5","80",null,"10","5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"5","80",null,"btnRemove:5","5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBody.form.edCode","value","dsForm","code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBody.form.edCdNm","value","dsForm","cdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBody.form.Radio00","value","dsForm","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBody.form.Spin00","value","dsForm","srtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBody.form.TextArea00","value","dsForm","cdDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBody.form.Edit00_00_00","value","dsForm","etc1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBody.form.Edit00_00_00_00","value","dsForm","etc2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBody.form.Edit00_00_00_00_00","value","dsForm","etc3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBody.form.Edit00_00_00_00_00_00","value","dsForm","etc4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBody.form.Edit00_00_00_00_00_00_00","value","dsForm","etc5");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("inputPopup.xfdl", function() {

        this.inputPopup_onload = function(obj,e)
        {
        	this.type = this.parent.type;
        	this.init();
        };

        this.init = function() {
        	this.dsForm.clearData();
        	this.dsForm.addRow();

        	this.dsForm.setColumn(this.dsForm.rowposition, 'code', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'grpCd', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'dtlCd', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'cdNm', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'useYn', 'Y');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'cdDesc', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'etc1', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'etc2', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'etc3', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'etc4', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'etc5', '');
        	this.dsForm.setColumn(this.dsForm.rowposition, 'srtNo', 0);

        	this.divBottom.form.btnRemove.set_enable(false);
        }

        // 저장
        this.save = function() {
        }

        // 저장 버튼 클릭
        this.divBottom_btnSave_onclick = function(obj,e)
        {
        	this.save();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.inputPopup_onload,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.divBottom_btnSave_onclick,this);
        };
        this.loadIncludeScript("inputPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
