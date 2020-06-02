import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"


const IndexPage = () =>  (
  <Layout>
    <div class="container">
  <div class="row">
    <section class="col-md-4">
	<div class="well well-sm">
        <h3><em>Becoming a Lean Library</em> Table of Contents</h3>
        <ol>
          <li><Link to="/book/introduction">Introduction</Link></li>
          <li><a href="{{ url_for('book', chapter='organizing-libraries') }}">Organizing Libraries</a></li>
		  <li>
		  <a href="{{ url_for('book', chapter='pull-vs-push') }}">Pull verses Push: Lessons from Lean Manufacturing</a></li>
		  <li>
		  <a href="{{ url_for('book', chapter='bml-as-ooda-loop') }}">Build-Measure-Learn as an OODA Loop</a>
		  </li>
		  <li>
		  <a href="{{ url_for('book', chapter='innovation-accounting-francis-taylor') }}">Innovation Accounting and Francis Taylor</a></li>
		  <li>
		  <a href="{{ url_for('book', chapter='defining-hypothesis-managing-complexity') }}">
				  Defining Hypothesis and Managing Complexity</a>
		  </li>
		  <li>
		  <a href="{{ url_for('book', chapter='actionable-metrics-patron-activity') }}">Actionable Metrics from Patron Activity
		  </a>
		  </li>
		  <li>
		  <a href="{{ url_for('book', chapter='pivoting-persevering-tech-changes') }}">
				  Pivoting or Persevering when Technology Changes
		  </a>
		  </li>
		  <li>
		  <a href="{{ url_for('book', chapter='devops') }}">DevOps or Development and Operations</a></li>
		  <li>
		  <a href="{{ url_for('book', chapter='future-as-warehouse') }}">The Future as a Warehouse</a>
		  </li>
        </ol>

      </div>
    </section>
    <section class="col-md-8">
	<div class="jumbotron">
			 <img src="{{ url_for('static', filename='images/becoming-lean-library.jpg') }}" class="image pull-right" />

      <h1><small>About</small><br />Becoming a Lean Library</h1>
      <p class="lead">
        Chapter-by-chapter annotations, notes, discussion, &amp; errata
       </p>
     </div>
    </section>
  </div>
 </div>
</Layout>)

export default IndexPage
