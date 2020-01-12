package day5;

public interface Notepad 
{
	
		public abstract void display();
		public abstract void edit();

}


package day5;

public class Operatingsys implements Notepad {
	
	public void display()
	{
		System.out.println("Operating system works");
	}
	public void edit()
	{
		System.out.println("Editing");
}
	}


package day5;

public class User extends Operatingsys{
	public static void main(String args[])
	{
		Operatingsys Os=new Operatingsys();
		Os.display();
		Os.edit();
		System.out.println("User access Notepad using OS");
}
}