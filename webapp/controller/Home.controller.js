
var aTableData = [];
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/m/Label',
	'sap/ui/model/Filter'
], function (Controller, JSONModel, Label, Filter) {
	"use strict";

	return Controller.extend("capg.fiori.controller.Home", {
		onInit: function () {
			this.oModel = new JSONModel();
			this.oModel.loadData(("model/data.json"), null, false);
			this.getView().setModel(this.oModel);
        
		},
			onSearch: function (oEvent) {
			debugger;
			var fname = [];
			var lname = [];
			var loc = [];

			var sValue = this.byId("fname").getSelectedItem().getText();
			var sValue1 = this.byId("lname").getSelectedItem().getText();
			var sValue2 = this.byId("loc").getSelectedItem().getText();
			if (sValue !== "All")
				fname.push(new Filter("FirstName", sap.ui.model.FilterOperator.EQ, sValue));
			if (sValue1 !== "All")
				lname.push(new Filter("LastName", sap.ui.model.FilterOperator.Contains, sValue1));
			if (sValue2 !== "All")
				loc.push(new Filter("Location", sap.ui.model.FilterOperator.Contains, sValue2));

			if (sValue1 !== "All")
				fname.push(new Filter(lname));
			if (sValue2 !== "All")
				fname.push(new Filter(loc));

			// this.OnGo();
			var oDetails = this.byId("Table1");
			var oItemBinding = oDetails.getBinding("items");
			oItemBinding.filter(fname);

		},

        // onNavigation : function (oEvent) {
        //     // var oSelectedItem = oEvent.getParameter("listItem");
        //     // var sPath = oSelectedItem.getBindingContextPath();
        //     // console.log(sPath);
        //     // var sIndex = sPath.split("/")[sPath.split("/").length - 1];
        //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        //     oRouter.navTo("Route");
        // },
        onListItemPressed : function (oEvent) {
             var oSelectedItem = oEvent.getSource();
             console.log(oSelectedItem);
             var sPath = oSelectedItem.getBindingContextPath();
            // var sPath = oSelectedItem.getBindingContextPath();
            console.log(sPath);
           var sIndex = sPath.split("/")[sPath.split("/").length - 1];
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Route",{ val : sIndex});
        }
   //     Add:function(oEvent)
   //     {
   //     var oView = this.getView();	
			//  var oInput1 = oView.byId("itemnumber").getValue();
			//  var oInput2 = oView.byId("itemnumber").getValue();
			// var oTable = oView.byId("Table1");
			
			// var aFilter =[];
			// aFilter.push(new sap.ui.model.Filter("itemnumber", sap.ui.model.FilterOperator.BT, oInput1, oInput2));
			// 		oTable.bindItems({
			// 	path: "model/data.json",
			// 	mode : "SingleSelectMaster",
			// 	templateShareable: true,
			// 	filters: aFilter,
			// 	template: new sap.m.ObjectListItem({
			// 	})
			// });
   //     }
        
	
	});
});

   