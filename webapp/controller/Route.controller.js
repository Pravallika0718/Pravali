sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("capg.fiori.controller.Route", {
	 onInit : function () {
               this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
               this.oRouter.getRoute("Route").attachPatternMatched(this.objectmatched,this);
              
            },

            objectmatched : function(oEvent){
                var value = oEvent.getParameter("arguments").val;
                // console.log(value);
                var rpath = "emp>/ProductCollection/" + value;
                this.getView().bindElement(rpath);
               // sap.ui.xmlfragment("fragments.Filter",this);  
                // var view=this.getView();
                // sap.ui.xml.fragment(view.getId(),"filter1910.view.fragment");
                

            },

            onhandleBack : function() {
                 sap.ui.core.UIComponent.getRouterFor(this).navTo("Home");
             }

	});
});