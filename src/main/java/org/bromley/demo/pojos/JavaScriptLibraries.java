package org.bromley.demo.pojos;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class JavaScriptLibraries {
	
	private Collection<JavaScriptLibrary> results;

	public Collection<JavaScriptLibrary> getResults() {
		return results;
	}

	public void setResults(Collection<JavaScriptLibrary> results) {
		this.results = results;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((results == null) ? 0 : results.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		JavaScriptLibraries other = (JavaScriptLibraries) obj;
		if (results == null) {
			if (other.results != null)
				return false;
		} else if (!results.equals(other.results))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "JavaScriptLibraries [results=" + results + "]";
	}

}
