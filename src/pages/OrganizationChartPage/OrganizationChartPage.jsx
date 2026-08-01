import React, { useState } from "react";
import { FaChevronRight, FaChevronDown, FaUserTie } from "react-icons/fa";

import PageBanner from "../../components/PageBanner/PageBanner";
import organizationChartData from "../../data/organizationChartData";

import "./OrganizationChartPage.css";

const TreeNode = ({ node, level = 0 }) => {
  const hasChildren = node.children && node.children.length > 0;

  const [expanded, setExpanded] = useState(level < 2);

  return (
    <div className="tree-node">
      <div className="tree-row">
        {level > 0 && <div className="tree-indent" style={{ width: `${level * 28}px` }} />}

        <div className="tree-content">
          {hasChildren ? (
            <button
              className="toggle-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <FaChevronDown /> : <FaChevronRight />}
            </button>
          ) : (
            <span className="toggle-placeholder" />
          )}

          <div className="tree-card">
            <div className="tree-icon">
              <FaUserTie />
            </div>

            <div className="tree-details">
              <h3>{node.title}</h3>

              {node.name && <p>{node.name}</p>}
            </div>
          </div>
        </div>
      </div>

      {hasChildren && expanded && (
        <div className="tree-children">
          {node.children.map((child, index) => (
            <TreeNode
              key={`${child.title}-${index}`}
              node={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const OrganizationChartPage = () => {
  const { pageTitle, bannerImage, hierarchy } = organizationChartData;

  return (
    <>
      <PageBanner
        title={pageTitle}
         bannerImage={bannerImage}
        />

      <section className="organization-chart-section">
        <div className="container">

          <div className="section-heading">
            <h2>{pageTitle}</h2>

            <p>
              Explore the organizational hierarchy of GPTI. Click the arrow
              beside any department to expand or collapse its reporting
              structure.
            </p>
          </div>

          <div className="organization-tree">

            <TreeNode
              node={hierarchy}
              level={0}
            />

          </div>

        </div>
      </section>
    </>
  );
};

export default OrganizationChartPage;