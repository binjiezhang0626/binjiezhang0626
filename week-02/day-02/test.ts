'use strict'

import {Stacks} from './Stack'
import {Queues} from './Queues'
import {LinkedLists} from './LinkedLists'

console.log('------Stack test------')
const stacks = new Stacks()
stacks.push('0')
stacks.push('1')
stacks.push('2')
stacks.push('3')
console.log(stacks)
console.log(stacks.peek())
console.log(stacks.pop())
console.log(stacks.peek())
console.log(stacks.empty())
console.log(stacks.pop())
console.log('------Queue test------')
const queues = new Queues()
queues.add('0')
queues.add('1')
queues.add('2')
queues.add('3')
console.log(queues)
console.log(queues.peek())
console.log(queues.remove())
console.log(stacks.peek())
console.log(stacks.empty())
console.log(queues.remove())
console.log('------LinkedList test------')
const linkedlist = new LinkedLists()
linkedlist.add('hello')
linkedlist.add('world')
linkedlist.add('hahaha',-1)
console.log(linkedlist)

linkedlist.removeItem('hello')
console.log(linkedlist)
// linkedlist.remove(0)
// console.log(linkedlist.get(0))
// console.log(linkedlist.get(1))
// console.log(linkedlist.get(2))
