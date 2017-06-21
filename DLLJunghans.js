
function Node(data) {
	this.value = data;
	this.Next = null;
	this.Prev = null;
}
function DoubleLinkedList() {
	this.Head = null;
	this.Tail = null;
}
DoubleLinkedList.prototype = {
		Add: function(valueForNode) {
		var toBeAdded = new Node();
		toBeAdded.value = valueForNode;
		if(!this.Head) {
			this.Head = toBeAdded;
			this.Tail = toBeAdded;
			return("True");
		}
		var Runner = this.Head;
		while(Runner){
			if(!Runner.Next){
				Runner.Next = toBeAdded;
				toBeAdded.Prev = Runner.Next;
				this.Tail = toBeAdded;
				break;
			}else{
				Runner = Runner.Next;
			}
		}
		return("True")
	},
	TraverseAndLog: function() {
		console.log("********** Heres a look at this list **********")
	var Runner = this.Head;
	while(Runner){
		if(Runner == this.Head){
			//COULD RETURN A VALUE BASED ON AN INPUT HERE, IT WOULD BE A FIND METHOD.
		}
		console.log(Runner.value);
		Runner = Runner.Next;
		}
	},
	Remove: function(removeValue) {
		var Runner = this.Head;
		if(Runner.value == removeValue) {
			console.log("Removing HEAD...")
			this.Head = Runner.Next;
			return("removed");
		};
		while(Runner){
			if(Runner.Next.value == removeValue){
				if(Runner.Next == this.Tail){
					Runner.Next.Prev = Runner;
					this.Tail = Runner.Next;
					return(true);
				}
				Runner.Next.Next.Prev = Runner;
				Runner.Next = Runner.Next.Next;
				return(true);
			}else{
				Runner = Runner.Next;
			}
		}
	},
}

const MyAwesomeList = new DoubleLinkedList();



MyAwesomeList.Add("Node Head");
MyAwesomeList.Add("Node 2");
MyAwesomeList.Add("Node 7");
console.log("****" + MyAwesomeList.Tail.value + "****")
MyAwesomeList.Add("Node 4");
console.log("****" + MyAwesomeList.Tail.value + "****")
console.log("****" + MyAwesomeList.Head.value + "****")
// MyAwesomeList.Remove("Node Head");
MyAwesomeList.Remove("Node 4");
// MyAwesomeList.Remove("Node 7");
console.log("****" + MyAwesomeList.Tail.value + "****")
console.log("****" + MyAwesomeList.Head.value + "****")
MyAwesomeList.TraverseAndLog();



