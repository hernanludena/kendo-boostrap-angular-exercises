package cursojpa.facturacion.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils
{
	public static String fechaToString(Date date)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy hh:mm");		
		return sdf.format(date);	
	}
	
	public static Date toStringFecha(String date)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy hh:mm");
		
		Date d = null;
		
		try
		{
			d = sdf.parse(date);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return d;
	}
	
}
