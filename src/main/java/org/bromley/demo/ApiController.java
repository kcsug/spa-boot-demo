package org.bromley.demo;

import java.util.Collection;

import org.bromley.demo.pojos.JavaScriptLibrary;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

	private WebService service;

	public ApiController(WebService service){
		this.service = service;
	}

	@GetMapping("/libraries")
	public Collection<JavaScriptLibrary> libraries() {
		return service.getJavaScriptLibraries().getResults();
	}

	@GetMapping("/libraries/{name}")
	public JavaScriptLibrary library(@PathVariable String name) {
		return service.getJavaScriptLibrary(name);
	}
}
