

# Struct

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Program
    {
        static void Main(string[] args)
        {

            //------------------------LINKED LIST------------------------
            PersonNode head = new PersonNode();
            PersonNode nextNode = head;

            string[] names={"Bob","Alice","Tom"};
            int[] ages = { 12, 13, 40 };

            for (int i = 0; i < names.Length; i++)
            {
                nextNode.Data = new Person(names[i], ages[i]);
                nextNode.Next = (i==names.Length-1) ? null :  new PersonNode();
                nextNode = nextNode.Next;
            }


            for (nextNode= head; nextNode!=null; nextNode = nextNode.Next)
            {
                Console.WriteLine(nextNode.Data.GetInfo());
            }


            //------------------------BINARY TREE------------------------
            PersonTreeNode root = new PersonTreeNode();
            root.Data = new Person("Bob", 15);
            root.Left = new PersonTreeNode() { Data = new Person("Alice", 40) };
            root.Right = new PersonTreeNode() { Data = new Person("Tom", 50) };

        }
    }
}
```