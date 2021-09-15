```javascript
// 멀티 선택 콤보 값 추출
for(i=0; i<this.ds_data.getRowCount(); i++) {
	if(this.ds_data.getColumn(i, "chk") == 1) {
		str_cd += this.ds_data.getColumn(i, "code") + ";";
		str_val += this.ds_data.getColumn(i, "value") + " / ";
	}
}
```
