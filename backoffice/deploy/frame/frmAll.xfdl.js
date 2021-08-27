(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmAll");
            this.set_titletext("Back Office");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLeftMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">업무화면예시</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work01.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시2</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work02.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0003</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시3</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work03.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0004</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">테스트 메뉴</Col><Col id=\"MENU_LVL\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Popup", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">하위메뉴_1</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">하위메뉴_2</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">하위메뉴_2_1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">하위메뉴_2_2</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">하위메뉴_2_3</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">하위메뉴_3</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">하위메뉴_4</Col><Col id=\"Column1\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"65","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"24","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_top_bg01");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01","0","24",null,"41","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_top_bg02");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02","0","24","160","41",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_main_logo");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00","190","24","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button01","310","24","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button02","430","24","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button03","550","24","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button04","670","24","120","40",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            obj.set_text("상단메뉴01");
            obj.set_cssclass("btn_top_menu");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static03","10","0","210","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_text("Hello! Hong Gil Dong");
            obj.set_cssclass("sta_top_textWht");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divLeft","0","65","190",null,null,"30",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","190","40",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_text("Main Title Menu");
            obj.set_cssclass("sta_LF_title01");
            this.divLeft.addChild(obj.name, obj);

            obj = new Grid("grdLeft","0","40","190",null,null,"0",null,null,null,null,this.divLeft.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsLeftMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_border("0px solid #c7c7c7,1px solid #c7c7c7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\"/></Band></Format></Formats>");
            this.divLeft.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"30","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BT_bg01");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01","20","0","270","30",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("알람 <b v=\'true\'>5건</b>이 대기 중 입니다.");
            obj.set_usedecorate("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divMdi","190","65",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this.divMdi.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_mdi_bg01");
            this.divMdi.addChild(obj.name, obj);

            obj = new Div("divButtonList","29","0",null,"30","90",null,null,null,null,null,this.divMdi.form);
            obj.set_taborder("3");
            this.divMdi.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","30","30",null,null,null,null,null,null,this.divMdi.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_mdi_home");
            this.divMdi.addChild(obj.name, obj);

            obj = new Button("btn_MdiPrev",null,"-1","30","31","58",null,null,null,null,null,this.divMdi.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_mdi_prev");
            this.divMdi.addChild(obj.name, obj);

            obj = new Button("btn_MdiNext",null,"-1","30","31","29",null,null,null,null,null,this.divMdi.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_mdi_next");
            this.divMdi.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"-1","30","31","0",null,null,null,null,null,this.divMdi.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_mdi_close");
            this.divMdi.addChild(obj.name, obj);

            obj = new Div("divWork","200","95",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","5","-31","120","101",null,null,null,null,null,null,this.divWork.form);
            obj.set_innerdataset("ds_Popup");
            obj.set_captioncolumn("Column0");
            obj.set_idcolumn("Column2");
            obj.set_levelcolumn("Column1");
            this.divWork.addChild(obj.name, obj);
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
        this.registerScript("frmAll.xfdl", function() {
        //MDI버튼 설정 정보
        this.numLeft 		= 0;
        this.numTop 		= 0;
        this.numWidth 		= 120;
        this.numHeight 		= 30;
        this.numExBtnLeft 	= 91;
        this.numExBtnTop 	= 1;
        this.numExBtnWidth 	= 28;
        this.numExBtnHeight	= 28;
        this.numWidCount 	= 0;
        this.numStIdx 		= 0;
        this.numEdIdx 		= 0;
        this.objFocusBtn 	= 0;

        this.frmAll_onload = function(obj,e)
        {
        	//this.fn_setSize(this.getOffsetWidth(), this.getOffsetHeight());
        	this.numWidCount = nexacro.floor((this.divMdi.form.divButtonList.getOffsetWidth())/(this.numWidth+5));
        };

        this.divLeft_grdLeft_oncellclick = function(obj,e)
        {
        	var sMenuId = this.dsLeftMenu.getColumn(e.row, "MENU_CD");
        	this.fn_openMenu(sMenuId);
        };

        this.fn_openHome = function()
        {

        }

        this.fn_openMenu = function(sMenuId)
        {
        	var nFRow;
        	var sPGMPATH;
        	var sPGMID;

        	var nFRowOpen;
        	var sWinId;
        	var sMenuNm;
        	var sMenuNavi;

        	var objMenuDs = this.dsLeftMenu;

        	nFRow 		= objMenuDs.findRow("MENU_CD", sMenuId);
        	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PGM_PATH");
        	sPGMID 		= objMenuDs.getColumn(nFRow, "PGM_ID")
        	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");

        	nFRowOpen = this.dsOpenMenu.findRow("MENU_CD", sMenuId);
        	sWinId = this.dsOpenMenu.getColumn(nFRowOpen, "WINID");

        	if (nFRow==-1)
        	{
        		alert("Menu가 존재하지 않습니다.");
        		return;

        	}else if(this.gfnIsNull(sPGMPATH)==true)
        	{
        		return;
        	}

        	if(nFRowOpen>-1)
        	{
        		this.fn_ActiveTabPage(sWinId);
        		return;
        	}

        	if(this.dsOpenMenu.rowcount > 12)
        	{
        		alert("메뉴는  8개이상 오픈할 수 없습니다.");
        		return;
        	}

        	sWinId = sMenuId + "_" + this.dsOpenMenu.rowcount+ "_" + parseInt(Math.random() * 100);

        	var objNewWin = new Div();
        	objNewWin.init(sWinId, 0, 0, null, null, 0, 0);

        	objNewWin.set_async(false);

        	this.divWork.form.addChild(objNewWin.name, objNewWin);

        	objNewWin.show();

        	this.fn_AddTabPage(sWinId, sMenuNm);

        	objNewWin.set_url(sPGMPATH+"::"+sPGMID);

        	this.fn_AddOpenMenu(sWinId, sMenuId, sMenuNm);

        	this.fn_ActiveTabPage(sWinId);

        	//application.gvActiveWinId = sWinId;
        }

        /*****************************************************************************
        함 수 명 칭 : gfnActiveWorkFrame
        함 수 설 명 : 선택된 업무화면 Active상태로 전환 함수
        파 라 미 터 : pvWinId – 업무화면 ID
        리 턴 내 용 : true/false - Active 성공 여부
        *****************************************************************************/
        this.fn_ActiveWorkFrame = function(pvWinId)
        {
        	var sWinId;
        	var rtn = false;

        	for(i=0;i<this.dsOpenMenu.rowcount;i++)
        	{
        		sWinId = this.dsOpenMenu.getColumn(i, "WINID");

        		if(sWinId==pvWinId)
        		{
        			this.divWork.form.components[sWinId].set_visible(true);
        			rtn = true;
        		}else
        		{
        			this.divWork.form.components[sWinId].set_visible(false);
        		}
        	}

        	return rtn;
        }

        /*****************************************************************************
        함 수 명 칭 : gfnCloseWorkForm
        함 수 설 명 : 업무화면 From 닫기 함수
        파 라 미 터 : pvWinId – 업무화면 ID
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_CloseWorkForm = function(pvWinId)
        {
         	this.divWork.form.removeChild(pvWinId);
         	this.fn_DelOpenMenu(pvWinId);
        	this.fn_DeleteTabpage(pvWinId);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnAddOpenMenu
        함 수 설 명 : 열린화면리스트 저장
        파 라 미 터 : pvWinId – 업무화면 ID
        			   pvMenuCd – 메뉴코드
        			   pvMenuNm – 메뉴명
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_AddOpenMenu = function(pvWinId, pvMenuCd, pvMenuNm)
        {
        	var nAddRow = this.dsOpenMenu.addRow();
        	this.dsOpenMenu.setColumn(nAddRow, "WINID", pvWinId);
        	this.dsOpenMenu.setColumn(nAddRow, "MENU_CD", pvMenuCd);
        	this.dsOpenMenu.setColumn(nAddRow, "MENU_NM", pvMenuNm);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnDelOpenMenu
        함 수 설 명 : 열린화면리스트 삭제
        파 라 미 터 : pvWinId – 업무화면 ID
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_DelOpenMenu = function(pvWinId)
        {
        	var nRow = this.dsOpenMenu.findRow("WINID", pvWinId);

        	this.dsOpenMenu.deleteRow(nRow);
        }


        this.fn_AddTabPage = function(pvWinId, pvMenuNm)
        {

        	var nRow = this.dsOpenList.addRow();
        	this.dsOpenList.setColumn(nRow, "code", 		pvWinId);
        	this.dsOpenList.setColumn(nRow, "caption", 	pvMenuNm);
        	this.dsOpenList.setColumn(nRow, "BTN_ID", 		"btn_Menu_" + pvWinId);
        	this.dsOpenList.setColumn(nRow, "BTN_EX_ID", 	"btn_Close_" + pvWinId);

        	this.fn_MenuClear();

        	var objBtn = new Button(); // 메뉴 버튼
        	objBtn.init("btn_Menu_" + pvWinId, this.numLeft, this.numTop, this.numWidth, this.numHeight, null, null);

        	this.divMdi.form.divButtonList.form.addChild("btn_Menu_" + pvWinId, objBtn);
        	objBtn.set_cssclass("btn_mdi_menu");
        	objBtn.set_enable(true);

        	//var strText = this.fnGetByteStr(pvMenuNm, 10);

        	objBtn.set_text(pvMenuNm); // 10Byte 까지 출력
        	objBtn.set_visible(true);
        	objBtn.addEventHandler("onclick", this.div_main_btn_Menu_onclick, this);
        	objBtn.show();

        	var objCloseBtn = new Button(); // 메뉴 닫기 버튼
        	objCloseBtn.init("btn_Close_" + pvWinId, this.numExBtnLeft, this.numExBtnTop, this.numExBtnWidth, this.numExBtnHeight, null, null);
        	this.divMdi.form.divButtonList.form.addChild("btn_Close_" + pvWinId, objCloseBtn);

        	objCloseBtn.set_cssclass("btn_mdi_extra");
        	objCloseBtn.set_visible(true);
        	objCloseBtn.addEventHandler("onclick", this.div_main_btn_Close_onclick, this);
        	objCloseBtn.show();

        	objCloseBtn.bringToFront();

        	this.objFocusBtn = objBtn;

        	this.fn_MenuMove("ADD");
        }

        this.div_main_btn_Menu_onclick = function(obj,  e)
        {
        	var strVar = obj.name.replace("btn_Menu_", "");
        	this.fn_ActiveTabPage(strVar);
        }

        this.div_main_btn_Close_onclick = function(obj,  e)
        {
        	var strVar = obj.name.replace("btn_Close_", "");
        	this.fn_MenuClose(strVar);
        }

        this.fnGetByteStr = function(strValue, nLen)
        {
        	if(this.gfnIsNull(strValue)==true) return "";
        	var strReturn = "";
        	var strCh;
        	var nChLen = 0;
        	for(var i=0; i<strValue.length; i++) {
        		strCh = strValue.charAt(i);
        		this.edtText.set_value(strCh);
        		nChLen += this.edtText.getLength("ascii");
        		if(nChLen <= nLen) {
        			strReturn += strCh;
        		} else {
        			break;
        		}
        	}

        	this.edtText.set_value(strValue);

        	if(this.edtText.getLength("ascii") > nLen) {
        		strReturn += "…";
        	}
        	return strReturn;
        }



        this.fn_MenuClose = function(pvWinId)
        {
        	this.fn_CloseWorkForm(pvWinId);

        	if(this.dsOpenList.rowcount > 0) {
        		this.divMdi.form.btnCloseAll.set_enable(true);
        	} else {
        		this.divMdi.form.btnCloseAll.set_enable(false);
        	}
        }

        this.fn_ActiveTabPage = function(pvWinId)
        {
        	this.fn_MenuClear();
        	var nRow = this.dsOpenList.findRow("code", pvWinId);
        	this.objFocusBtn = this.divMdi.form.divButtonList.form.components[this.dsOpenList.getColumn(nRow, "BTN_ID")];

        	this.objFocusBtn.set_enable(false);

        	if(nRow < this.numStIdx) {
        		this.numStIdx = nRow;
        		this.numEdIdx = this.numStIdx + this.numWidCount - 1;
        		if(this.numEdIdx == this.dsOpenList.getRowCount()) this.numEdIdx = this.dsOpenList.getRowCount() - 1;
        	} else if(nRow > this.numEdIdx) {
        		this.numEdIdx = nRow;
        		this.numStIdx = this.numEdIdx - this.numWidCount + 1;
        		if(this.numStIdx < 0) { this.numStIdx = 0; }
        	}

        	this.fn_MenuMove("");

        	this.fn_ActiveWorkFrame(pvWinId);
        }

        this.fn_MenuClear = function(blnVisi)
        {
        	if(this.gfnIsNull(blnVisi)==true) blnVisi = true;

        	var objComps = this.divMdi.form.divButtonList.form.components;
        	for(var i=0; i<objComps.length; i++) {
        		if(objComps[i] instanceof Button && objComps[i].name.indexOf("btn_Menu_")>=0) {
        			objComps[i].set_enable(true);
        			objComps[i].set_visible(blnVisi);
        		} else if(!blnVisi && objComps[i] instanceof Button && objComps[i].name.indexOf("btn_Close_")>=0) {
        			objComps[i].set_visible(blnVisi);
        		}
        	}
        }

        // NEXT
        // PREV
        // ADD
        // FIRST
        this.fn_MenuMove = function(pvType)
        {
        	if(pvType == "ADD") {
        		this.numEdIdx = this.dsOpenList.getRowCount() - 1;
        		this.numStIdx = this.numEdIdx - this.numWidCount + 1;
        		if(this.numStIdx < 0) { this.numStIdx = 0; }
        	} else if(pvType == "NEXT") {
        		this.numEdIdx += 1;
        		this.numStIdx = this.numEdIdx - this.numWidCount + 1;
        		if(this.numStIdx < 0) { this.numStIdx = 0; }
        	} else if(pvType == "PREV") {
        		this.numStIdx -= 1;
        		this.numEdIdx = this.numStIdx + this.numWidCount - 1;
        		if(this.numEdIdx >= this.dsOpenList.getRowCount()) this.numEdIdx = this.dsOpenList.getRowCount() - 1;
        	} else if(pvType == "FIRST") {
        		this.numStIdx = 0;
        		this.numEdIdx = this.numStIdx + this.numWidCount - 1;
        		if(this.numEdIdx >= this.dsOpenList.getRowCount()) this.numEdIdx = this.dsOpenList.getRowCount() - 1;
        	} else if(pvType == "RESIZE") {
        		var numRow = -1;
        		if(this.dsOpenList.getRowCount() <= this.numWidCount) {
        			this.numStIdx = 0;
        			this.numEdIdx = this.numStIdx + this.numWidCount - 1;
        			if(this.numEdIdx >= this.dsOpenList.getRowCount()) this.numEdIdx = this.dsOpenList.getRowCount() - 1;
        		} else {
        			numRow = this.dsOpenList.findRow("BTN_ID", this.objFocusBtn.name);
        			if(((numRow + 1) - this.numWidCount) >= 0) {
        				this.numEdIdx = numRow;
        				this.numStIdx = this.numEdIdx - this.numWidCount + 1;
        			} else {
        				this.numStIdx = 0;
        				this.numEdIdx = this.numStIdx + this.numWidCount - 1;
        				if(this.numEdIdx >= this.dsOpenList.getRowCount()) this.numEdIdx = this.dsOpenList.getRowCount() - 1;
        			}
        		}
        	}

        	this.fn_MenuClear(false);

        	var objBtn, objExBtn;
        	var nLeft = this.numLeft;

        	for(var i=this.numStIdx; i<=this.numEdIdx; i++) {
        		objBtn 		= this.divMdi.form.divButtonList.form.components[this.dsOpenList.getColumn(i, "BTN_ID")];
        		objExBtn 	= this.divMdi.form.divButtonList.form.components[this.dsOpenList.getColumn(i, "BTN_EX_ID")];
        		objBtn.move(nLeft, this.numTop);
        		objBtn.set_visible(true);
        		objExBtn.move(nLeft+this.numExBtnLeft, this.numExBtnTop);
        		objExBtn.set_visible(true);

        		nLeft += this.numWidth-1;
        	}

        	if(this.numStIdx <= 0) { this.divMdi.form.btn_MdiPrev.set_enable(false); }
        	else                   { this.divMdi.form.btn_MdiPrev.set_enable(true); }

        	if((this.numEdIdx + 1) == this.dsOpenList.getRowCount()) { this.divMdi.form.btn_MdiNext.set_enable(false); }
        	else                                                      { this.divMdi.form.btn_MdiNext.set_enable(true); }

        	if(this.dsOpenList.getRowCount() > 0) {
        		this.divMdi.form.btnCloseAll.set_enable(true);
        	} else {
        		this.divMdi.form.btnCloseAll.set_enable(false);
        	}

        	if(this.objFocusBtn != null) {
        		this.objFocusBtn.set_enable(false);
        	}

        	this.divMdi.form.divButtonList.form.resetScroll();
        }

        this.fn_DeleteTabpage = function(pvWinId)
        {
        	var strBtnId, strBtnExId;
        	var objBtn, objBtnEx;
        	var nRow = this.dsOpenList.findRow("code", pvWinId);

        	if(nRow < 0) {
        		return;
        	}

        	strBtnId 		= this.dsOpenList.getColumn(nRow, "BTN_ID");
        	strBtnExId 		= this.dsOpenList.getColumn(nRow, "BTN_EX_ID");
        	objBtn 			= this.divMdi.form.divButtonList.form.components[strBtnId];
        	objBtnEx 		= this.divMdi.form.divButtonList.form.components[strBtnExId];

        	this.removeChild(strBtnId);
        	objBtn.destroy();
        	objBtn = null;

        	this.removeChild(strBtnExId);
        	objBtnEx.destroy();
        	objBtnEx = null;

        	this.dsOpenList.deleteRow(nRow);
        	this.dsOpenList.applyChange();
        	this.numEdIdx = -1;

        	this.fn_MenuMove("RESIZE");

        	if(this.dsOpenMenu.getRowCount()==0)return;

        	//다음 포커스 설정
        	var preMenuId;
        	for(var i=this.dsOpenMenu.getRowCount()-1; i>=0; i--)
        	{
        		preMenuId = this.dsOpenMenu.getColumn(i, "WINID");
        		break;
        	}
        	this.fn_ActiveTabPage(preMenuId);
        }

        this.divMdi_onsize = function(obj,e)
        {
        	this.numWidCount = nexacro.floor(this.divMdi.form.divButtonList.getOffsetWidth()/(this.numWidth+1));
        	if(this.dsOpenList.rowcount == 0) return;
        	this.fn_MenuMove("RESIZE");
        };

        this.divMdi_btn_MdiPrev_onclick = function(obj,  e)
        {
        	this.fn_MenuMove("PREV");
        }

        this.divMdi_btn_MdiNext_onclick = function(obj,  e)
        {
        	this.fn_MenuMove("NEXT");
        }

        this.divMdi_btnCloseAll_onclick = function(obj,  e)
        {
        	var i;
        	for(i=this.dsOpenMenu.rowcount-1;i>=0;i--)
        	{
        		preMenuId = this.dsOpenMenu.getColumn(i, "WINID");
        		this.fn_CloseWorkForm(preMenuId);
        	}
        }

        /*****************************************************************************
        함 수 명 칭 : gfnIsNull
        함 수 설 명 : 입력값 Null 체크 함수
        파 라 미 터 : pvVal – 입력값
        리 턴 내 용 : true/false 값이 Null일 경우 true
        *****************************************************************************/
        this.gfnIsNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        }
        this.Button00_onclick = function(obj,e)
        {
        	this.divWork.form.PopupMenu00.trackPopupByComponent(this.divTop.form.Button00,0,41);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmAll_onload,this);
            this.divTop.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.divLeft.form.grdLeft.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.divMdi.addEventHandler("onsize",this.divMdi_onsize,this);
            this.divMdi.form.btn_MdiPrev.addEventHandler("onclick",this.divMdi_btn_MdiPrev_onclick,this);
            this.divMdi.form.btn_MdiNext.addEventHandler("onclick",this.divMdi_btn_MdiNext_onclick,this);
            this.divMdi.form.btnCloseAll.addEventHandler("onclick",this.divMdi_btnCloseAll_onclick,this);
        };
        this.loadIncludeScript("frmAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
