package org.bromley.demo;

import org.bromley.demo.pojos.JavaScriptLibraries;
import org.bromley.demo.pojos.JavaScriptLibrary;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class WebService {
	
	private RestTemplate restTemplate;
	
	public WebService() {
		restTemplate = new RestTemplate();
	}
	
	public JavaScriptLibraries getJavaScriptLibraries() {
		return restTemplate.getForObject("https://api.cdnjs.com/libraries/", JavaScriptLibraries.class);
	}
	
	public JavaScriptLibrary getJavaScriptLibrary(String libraryName) {
		return restTemplate.getForObject("https://api.cdnjs.com/libraries/" + libraryName, JavaScriptLibrary.class);
	}

}
