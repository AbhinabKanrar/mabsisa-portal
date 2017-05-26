/**
 * 
 */
package com.mabsisa;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author abhinab
 *
 */
@Controller
public class Router {

	@GetMapping("/")
	public String index() {
		return "index";
	}

}
