```javascript
this.Combo01_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
{
	...
	// 선택된 상위 콤보 데이터로 하위 콤보리스트 filter처리
	this.ds_filter2.filter("Code.indexOf('"+strFile+"')>=0");
	...
}
```
