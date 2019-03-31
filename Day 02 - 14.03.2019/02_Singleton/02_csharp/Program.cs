using System;

namespace ConsoleApp1
{

    class Singleton
    {
        private Singleton() { }

        private static readonly Singleton instance = new Singleton();

        public static Singleton GetInstance()
        {
            return instance;
        }

    }

    class Program
    {
       
        static void Main(string[] args)
        {
            Singleton s1 = Singleton.GetInstance();
            Singleton s2 = Singleton.GetInstance();

            Console.WriteLine(s1==s2);  //--> True
        }
    }
}
