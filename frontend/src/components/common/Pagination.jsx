import React, { useState, useEffect } from "react";

const Pagination = ({ totalCount, previous, next, pageSize, pageNumber }) => {
  const [previousLink, setPreviousLink] = useState("");
  const [nextLink, setNextLink] = useState("");
  const [links, setLinks] = useState([]);

  const getParameters = (urlString) => {
    let paramString = urlString.split("?")[1];
    let queryString = new URLSearchParams(paramString);

    var parameters = [];
    for (let pair of queryString.entries()) {
      parameters[pair[0]] = pair[1];
    }

    return parameters;
  };

  const buildURL = (baseURL, parameters) => {
    const URLWithParams = new URL(baseURL);

    for (const key in parameters) {
      URLWithParams.searchParams.append(key, parameters[key]);
    }

    return URLWithParams.href;
  };

  useEffect(() => {
    var totalPage = Math.ceil(totalCount / pageSize);
    var currentURL = window.location.href;
    var parameters = getParameters(currentURL);
    var baseURL = window.location.protocol + "//" + window.location.host + window.location.pathname;

    // Set Previous Link
    if (previous) {
      parameters["page"] = pageNumber - 1;
      setPreviousLink(buildURL(baseURL, parameters));
    }

    // Set Next Link
    var nextLink = null;
    if (next) {
      parameters["page"] = pageNumber + 1;
      setNextLink(buildURL(baseURL, parameters));
    }

    // Set Link List
    var links = [];
    var page;
    for (page = 1; page <= totalPage; page++) {
      parameters["page"] = page;
      links[page] = buildURL(baseURL, parameters);
    }
    setLinks(links);
  }, []);
  return (
    <div class="pagination">
      <ul class="crumbs">
        {previousLink && (
          <li>
            <a class="crumb crumb__prev" href={previousLink}>
              &lt;
            </a>
          </li>
        )}
        {links.map((link, page) => (
          <li>
            {page == pageNumber ? (
              <a class="crumb crumb__active" href={link}>
                {page}
              </a>
            ) : (
              <a class="crumb" href={link}>
                {page}
              </a>
            )}
          </li>
        ))}
        {nextLink && (
          <li>
            <a class="crumb crumb__next" href={nextLink}>
              &gt;
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;