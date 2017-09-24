const exampleNode = {
	'val': 1,
	'next': null
}

addNode = function (head, val){
	let runner;
	if(!head.val) {
		head.val = val;
		return;
	};
	if(!head.next) {
		head.next = new ListNode(val);
	} else {
		runner = head.next
	};
	while (runner) {
		if(!runner.next) {
			runner.next = new ListNode(val);
			break;
		} else {
			runner = runner.next;
		}
	}
}

 function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
var reverseKGroup = function(head, k) {
	let listAsArray = listToArray(head);
	let returnMaster = [];
	if (listAsArray.length >= k) {
		while (listAsArray.length >= k) {
			let slicedportion = listAsArray.slice(0, k);
			listAsArray.splice(0, k);
			returnMaster.push(slicedportion.reverse());
		};
		if(listAsArray.length > 0) {
			returnMaster.push(listAsArray);
		}

	} else if(listToArray.length > 0 ) {
		returnMaster.push(listAsArray);
	}
	return nestedArrayToList(returnMaster);
};
var listToArray = function(headNode) {
	let masterArr = [];
	if(headNode) {
		masterArr.push(headNode.val)
		let runner;
		if(headNode.next){
			runner = headNode.next;
		}
		while (runner ) { 
			masterArr.push(runner.val);
			if(runner.next){
				runner = runner.next;
			} else {
				break;
			}
		}
	}
	return masterArr;
}
var nestedArrayToList = function (array) {
	let listHeadNode = new ListNode(null);
	for (let i = 0; i <= array.length - 1; i++) {
		for(let k = 0; k < array[i].length ; k++){
			addNode(listHeadNode, array[i][k]);
		}
	}
	return listHeadNode 
}

console.log(reverseKGroup(exampleNode, 3)); 

