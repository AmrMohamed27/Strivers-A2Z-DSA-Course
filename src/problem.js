/**
 * Definition for singly-linked list.
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function reverseList(head) {
    var _a, _b;
    var dummy = new ListNode(0);
    console.log((_b = (_a = walkList(head)) === null || _a === void 0 ? void 0 : _a.val) !== null && _b !== void 0 ? _b : 0);
    return dummy;
}
function walkList(node) {
    // Base case
    // return if we are at the end of the list
    if (!node || !node.next)
        return node;
    var nextNode = walkList(node.next);
    if (nextNode) {
        // Update the next node
        node.next = nextNode;
    }
    return node;
}
