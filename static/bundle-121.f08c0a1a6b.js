"use strict";function contractIterate(t,e){var n,i=t,r="Object";"function"==typeof t&&(i=t.prototype,r=t.name||"AnonymousFunc");for(n in i)"function"==typeof i[n]&&"_"!==n.substr(0,1)&&e(n,i,i[n]);return r}function assertAdheresToContract(t,e){var n=[];contractIterate(e,function(t){n.push(t)}),contractIterate(t,function(i){if(-1===n.indexOf(i))throw new Error("'"+e.name+"' does not implement method '"+i+"' from contract '"+t.name+"'")})}function $IsDefined(t){return void 0!==t}function $IsTrueFalseNull(t){return t===!0||t===!1||null===t}function $IsValidName(t){return null!==t.match(/^.../)}function $IsValidUuidV4(t){return null!==t.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)}function $IsArrayOfUuidV4s(t){for(var e=0;e<t.length;e++)if(!$IsValidUuidV4(t[e]))return!1;return!0}function validateArgsObj(t,e){var n,i={};for(n in t)if(void 0===t[n].default||void 0!==e[n]){if(t[n].required&&(t[n].test=$IsDefined),t[n].test&&t[n].test(e[n])!==!0){if(void 0!==t[n].default){i[n]=t[n].default;continue}throw new Error("Arg '"+n+"' with value '"+e[n]+"' failed test "+t[n].test)}i[n]=e[n]}else i[n]=t[n].default;return i}function EventPubSub(){this._registrations={}}function Node(t){t=validateArgsObj({id:{test:$IsValidUuidV4},name:{test:$IsValidName},todo:{test:$IsTrueFalseNull,"default":!1},description:{"default":""},childIds:{test:$IsArrayOfUuidV4s,"default":[]}},t),this._id=t.id,this._name=t.name,this._todo=t.todo,this._description=t.description,this._childIds=t.childIds}function Mapdone(t,e){this._eventPubSub=t,this._nodeRepository=e}function InMemoryNodeRepository(){this._rootId=null,this._nodes={}}function CommandHandler(){}function CommandExecutor(t,e){this._mapdone=t,this._eventPubSub=e}function LocalNodeRepository(){}function LocalReadModel(){}function nodeConfigEvents(t,e,n,i){n.subscribe("exception",function(t,n,i){var r="Exception event: "+t+'("'+n.join('", "')+'") -> '+i;e.error(r)}),n.subscribe("childAdded",function(e){e==t.node.id&&(t.node=i.getNode(t.node.id))}),n.subscribe("childRemoved",function(e){e==t.node.id&&(t.node=i.getNode(t.node.id))}),n.subscribe("nodeEdited",function(e){var n=t.node.childIds;n.push(t.node.id),-1!==n.indexOf(e)&&(t.node=i.getNode(t.node.id))})}function nodeConfigCommands(t,e,n,i){t.newChild=function(t){var n=e.open({templateUrl:"modal-node.html",controller:"ModalNodeCtrl",resolve:{existingNode:function(){return{}}}});n.result.then(function(e){i.addChild({parentId:t.id,id:uuid.v4(),name:e.name,todo:e.todo,description:e.description})})},t.editNode=function(t){var n=e.open({templateUrl:"modal-node.html",controller:"ModalNodeCtrl",resolve:{existingNode:function(){return t}}});n.result.then(function(e){for(var n={},r=["name","todo","description"],o=0;o<r.length;o++){var s=r[o];t[s]!==e[s]&&(n[s+"From"]=t[s],n[s+"To"]=e[s])}n.id=t.id,i.editNode(n)})},t.attachExisting=function(){n.error("Not yet implemented")},t.addChild=function(){i.addChild({parentId:nodeId,id:uuid.v4(),name:t.newChild.name}),t.newChild.name="",t.newChild.show=!1},t.removeChild=function(t,e){i.removeChild({parentId:t.id,childId:e.id})},t.toggleDone=function(t){i.toggleDone({id:t.id,from:t.todo})}}EventPubSub.prototype.subscribe=function(t,e){void 0===this._registrations[t]&&(this._registrations[t]=[]),this._registrations[t].push(e)},EventPubSub.prototype.publish=function(t,e){if(void 0!==this._registrations[t])for(var n=0;n<this._registrations[t].length;n++)this._registrations[t][n].apply(void 0,e)},Node.prototype.toString=function(){return"Node<"+this._id.substring(0,4)+":"+this._name+">"},Node.prototype.getId=function(){return this._id},Node.prototype.getName=function(){return this._name},Node.prototype.getTodo=function(){return this._todo},Node.prototype.getDescription=function(){return this._description},Node.prototype.getChildIds=function(){return this._childIds},Node.prototype.equals=function(t){return this.getId()===t.getId()&&this.getName()===t.getName()&&this.getTodo()===t.getTodo()&&this.getDescription()===t.getDescription()&&this.getChildIds().join(",")===t.getChildIds().join(",")},Mapdone.prototype.createRoot=function(t){t=validateArgsObj({id:{test:$IsValidUuidV4},name:{required:!0},todo:{"default":null},description:{"default":""}},t);var e=this._nodeRepository.getRootId();if(t.id!==e){if(e)return void this._eventPubSub.publish("rootOverrideError",[t.id,e]);this._nodeRepository.saveNode(new Node(t)),this._nodeRepository.setRootId(t.id),this._eventPubSub.publish("rootCreated",[t.id])}},Mapdone.prototype.addChild=function(t){t=validateArgsObj({parentId:{test:$IsValidUuidV4},id:{test:$IsValidUuidV4},name:{required:!0},todo:{"default":!1},description:{"default":""}},t);var e=this._nodeRepository.getNode(t.id),n=new Node(t);if(null!==e)return void(n.equals(e)||this._eventPubSub.publish("childAddError",[t.parentId,t.id]));var i=this._nodeRepository.getNode(t.parentId);this._nodeRepository.saveNode(n);var r=i.getChildIds();r.push(t.id),this._nodeRepository.saveNode(new Node({id:i.getId(),name:i.getName(),todo:i.getTodo(),description:i.getDescription(),childIds:r})),this._eventPubSub.publish("childAdded",[t.parentId,t.id])},Mapdone.prototype.removeChild=function(t){t=validateArgsObj({parentId:{test:$IsValidUuidV4},childId:{test:$IsValidUuidV4}},t);var e=this._nodeRepository.getNode(t.parentId);-1!==e.getChildIds().indexOf(t.childId)&&(this._nodeRepository.saveNode(new Node({id:e.getId(),name:e.getName(),todo:e.getTodo(),description:e.getDescription(),childIds:e.getChildIds().filter(function(e){return e!=t.childId})})),this._eventPubSub.publish("childRemoved",[t.parentId,t.childId]))},Mapdone.prototype.toggleDone=function(t){t=validateArgsObj({id:{test:$IsValidUuidV4},from:{test:$IsTrueFalseNull}},t);var e,n=this._nodeRepository.getNode(t.id);switch(n.getTodo()){case null:return;case!0:e=!1;break;case!1:e=!0}this._nodeRepository.saveNode(new Node({id:n.getId(),name:n.getName(),todo:e,description:n.getDescription(),childIds:n.getChildIds()})),this._eventPubSub.publish("doneToggled",[t.id,e])},Mapdone.prototype.editNode=function(t){var e=this._nodeRepository.getNode(validateArgsObj({id:{test:$IsValidUuidV4}},t).id),n={name:e.getName(),todo:e.getTodo(),description:e.getDescription()},i={};for(var r in n)if(void 0!==t[r+"To"]&&void 0!==t[r+"From"]){if(t[r+"From"]!==n[r])return;i[r]=t[r+"To"],n[r]=i[r]}n.id=t.id,n.childIds=e.getChildIds(),this._nodeRepository.saveNode(new Node(n)),this._eventPubSub.publish("nodeEdited",[t.id,i])},Mapdone.prototype.reorderChildren=function(t){t=validateArgsObj({id:{test:$IsValidUuidV4},from:{test:$IsArrayOfUuidV4s},to:{test:$IsArrayOfUuidV4s}},t);var e=this._nodeRepository.getNode(t.id),n=e.getChildIds(),i=t.from.join(",");if(i!==t.to.join(",")&&n.join(",")===i&&t.to.length===n.length){for(var r=0;r<n.length;r++)if(-1===t.to.indexOf(n[r]))return;this._nodeRepository.saveNode(new Node({id:t.id,name:e.getName(),todo:e.getTodo(),description:e.getDescription(),childIds:t.to})),this._eventPubSub.publish("childrenReordered",[t.id,t.to])}},InMemoryNodeRepository.prototype.getRootId=function(){return this._rootId},InMemoryNodeRepository.prototype.setRootId=function(t){this._rootId=t},InMemoryNodeRepository.prototype.getNode=function(t){return this._nodes[t]||null},InMemoryNodeRepository.prototype.saveNode=function(t){this._nodes[t.getId()]=t},contractIterate(Mapdone,function(t){CommandHandler.prototype[t]=function(){throw new Error("Not implemented "+t)}}),contractIterate(Mapdone,function(t){CommandExecutor.prototype[t]=function(){try{this._mapdone[t].apply(this._mapdone,arguments)}catch(e){this._eventPubSub.publish("exception",[t,[].slice.call(arguments,0),e])}}}),LocalNodeRepository.prototype.getRootId=function(){return localStorage.getItem("root")},LocalNodeRepository.prototype.setRootId=function(t){localStorage.setItem("root",t)},LocalNodeRepository.prototype.createRoot=function(t){this.saveNode(t),localStorage.setItem("root",t.getId())},LocalNodeRepository.prototype.getNode=function(t){var e=JSON.parse(localStorage.getItem(t));return null===e?null:new Node({id:t,name:e.name,todo:e.todo,description:e.description,childIds:e.childIds})},LocalNodeRepository.prototype.saveNode=function(t){var e={name:t.getName(),todo:t.getTodo(),description:t.getDescription(),childIds:t.getChildIds()};localStorage.setItem(t.getId(),JSON.stringify(e))},assertAdheresToContract(InMemoryNodeRepository,LocalNodeRepository),LocalReadModel.prototype.getRootId=function(){return localStorage.getItem("root")},LocalReadModel.prototype.getNode=function(t){var e=JSON.parse(localStorage.getItem(t));e.id=t,e.children=[];for(var n=0;n<e.childIds.length;n++){var i=JSON.parse(localStorage.getItem(e.childIds[n]));e.children.push({id:e.childIds[n],name:i.name,todo:i.todo,description:i.description,childIds:i.childIds,childCount:i.childIds.length})}return e};var LOCAL_EVENT_PUBSUB=new EventPubSub,LOCAL_READ_MODEL=new LocalReadModel,COMMAND_EXECUTOR=new CommandExecutor(function(){return new Mapdone(LOCAL_EVENT_PUBSUB,new LocalNodeRepository)}.call(),LOCAL_EVENT_PUBSUB),NEW_ROOT,ROOT_ID=function(){var t=LOCAL_READ_MODEL.getRootId();return null!==t?t:(NEW_ROOT={id:uuid.v4(),name:"All of the Things",description:'This is the centre of your "todo" universe - welcome home! Try clicking the + below to add more items. Click on the items for more detail, and to add stuff to them in turn. You can edit/delete this text by clicking on the pencil to the right.',children:[]},COMMAND_EXECUTOR.createRoot({id:NEW_ROOT.id,name:NEW_ROOT.name,description:NEW_ROOT.description}),NEW_ROOT.id)}.call(),mapdoneApp=angular.module("mapdoneApp",["ngRoute","ui.sortable","ui.bootstrap","toastr","mapdoneControllers","mapdoneServices"]);mapdoneApp.config(["$routeProvider",function(t){t.when("/node/:nodeId",{templateUrl:"partials/node-detail.html",controller:"NodeCtrl"}).otherwise({redirectTo:"/node/"+ROOT_ID})}]);var mapdoneServices=angular.module("mapdoneServices",[]);mapdoneServices.factory("CommandHandler",[function(){return COMMAND_EXECUTOR}]),mapdoneServices.factory("ReadModel",[function(){return LOCAL_READ_MODEL}]),mapdoneServices.factory("EventPubSub",[function(){return LOCAL_EVENT_PUBSUB}]),angular.module("ui.bootstrap.modal").directive("modalWindow",["$timeout",function(t){return{priority:1,link:function(e,n){t(function(){n.find("[autofocus]").focus()})}}}]);var mapdoneControllers=angular.module("mapdoneControllers",[]);mapdoneControllers.controller("ModalNodeCtrl",["$scope","$modalInstance","existingNode",function(t,e,n){t.input={},t.input.node={};for(var i in n)t.input.node[i]=n[i];t.input.node.type=null===t.input.node.todo?"other":"todo",t.ok=function(){t.input.node.todo="todo"===t.input.node.type?n.todo===!0?!0:!1:null,e.close(t.input.node)},t.cancel=function(){e.dismiss("cancel")}}]),mapdoneControllers.controller("NodeCtrl",["$scope","$routeParams","$location","$modal","toastr","ReadModel","CommandHandler","EventPubSub",function(t,e,n,i,r,o,s,a){t.node=o.getNode(e.nodeId),nodeConfigCommands(t,i,r,s),nodeConfigEvents(t,r,a,o),t.showNode=function(t){n.path("/node/"+t.id)},t.sortableOptions={containment:"parent",cursor:"ns-resize",tolerance:"pointer",stop:function(){s.reorderChildren({id:t.node.id,from:t.node.childIds,to:t.node.children.map(function(t){return t.id})})}}}]);