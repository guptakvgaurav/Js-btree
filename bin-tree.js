/*
*	A simple implementation for binary trees.
*/

var BTree = function (){
	this.root = null;
	this.size = 0;

};

var BNode = function(value){
		this.left = null;
		this.right = null;
		this.val = value;
		this.getValue = function(){
			return this.val.id;
		}
};


BTree.prototype.insert = function(value){
	console.log('Adding %d to tree.', value);
	var currentNode = this.root;
	var followUpNode = null;
	var nodeToInsert = new BNode(value);
	if(this.root === null){
		console.log('Tree is empty. Adding %d to root.', value);
		this.root = nodeToInsert;
		this.size++;
		return this;
	}

	while(currentNode !== null){
		followUpNode = currentNode;
		var currentNodeValue = currentNode.getValue();
		// console.log('\tKey Comparisions. CurrentNodeValue %d\t KeyToInsert %d', currentNodeValue, value);		
		if(value < currentNodeValue){
			// node which we want to insert is less than current node, hence, make currentNode point to left of currentNode
			currentNode = currentNode.left;
			// console.log('\t\tAdding currentNode to left of currentnode = %j', currentNode);
		}else{
			// else make currentNode point to right of currentNode
			currentNode = currentNode.right;
			// console.log('\t\tAdding currentNode to right of currentnode = %j', currentNode);
		}		
	}

	if(followUpNode === null){
		this.root = newRoot;
	}else{
		this.size++;
		var followUpNodeValue = followUpNode.getValue();
		var valueOfNodeToInsert = nodeToInsert.getValue();
		if(valueOfNodeToInsert < followUpNodeValue){
			console.log('\t\tAdding %d to the left of %d',valueOfNodeToInsert, followUpNodeValue);
			followUpNode.left = nodeToInsert;
		}else{
			console.log('\t\tAdding %d to the right of %d',valueOfNodeToInsert, followUpNodeValue);
			followUpNode.right = nodeToInsert;
		}
	}
	return this;
};

BTree.prototype.numberOfNodes = function(){
	return this.size;
};

(function(){
	console.log('Simple test of implementation.\nNote: Edit getValue() of BNode to work it with your business object.');
	var myBo = function(identifier){
		this.profile = null;
		this.id = identifier;
	};

	myBo.prototype.toString = function(){
		return this.id;
	}
	var tree = new BTree();
	tree.insert(new myBo(15));
	tree.insert(new myBo(17));
	tree.insert(new myBo(19));
	tree.insert(new myBo(1));
	tree.insert(new myBo(5));
	tree.insert(new myBo(2));
	tree.insert(new myBo(8));
	tree.insert(new myBo(6));
	console.log('==========\ntotal number of nodes are %d\n============= ', tree.numberOfNodes());
})();