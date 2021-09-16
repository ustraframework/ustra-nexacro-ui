```javascript
//DIV 공통 멀티콤보 컴포넌트 바인드
url : ustra::forms/common/multiCombo.xfdl
//DIV 유저프로퍼티 설정
commonCode : 불러올 공통코드
itemChangedFnName : 선택된 콤보 데이터를 받아올 콜백함수명
//멀티콤보 콜백 함수
this.cbItemChanged = function(selCd) {
	//멀티콤보 공통 컴포넌트에서 받아온 코드값
	this.TextArea00.set_value(selCd);
}
```
