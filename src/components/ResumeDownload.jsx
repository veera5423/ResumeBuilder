// // // import html2canvas from "html2canvas"// ;
// // import jsPDF from "jspdf// ";

// // function ResumeDownload({ resumeR//ef } ) {
// //     const handleDownload = asy//nc () =>  {
// //         if (!resuu
// nssalit  // const cacanvas(resumeRef.current, {
// //       //      sca scale,
// //             useCORS: true,
// //             //logging: fals
// //            // windowWidth:sumeRef.current.//scrollWidth,             wind//owHeight: resRef.current.scrollHeight
// //         });

// ////         conimgData = canvas.toDataURL("image/png");
// //  //       co pdf = //new jsPDF
// //             orientation: "portrait",
// //    //         t: "mm",
// //             //format: "a4"         });

// //        // const imgWid= 210; // A4 //width in mm
//         const //imgHeight(canvas//.height *gWidth) / canvas.width;
// //         const// pageHeig= 297; // A4 height in mm
// //         let heightLeft = imgHeig//ht;
// //      let position = 0;

// //         // First// page
// //      pdf.addImage(imgData, "//PNG", 0, ition, imgWidth, imgH//eight);
//         heightL//eft -= paeight;

// //         // Additional pages if needed
// //         wh//ile (heigeft >= 0) {
// //             p//osition =ightLeft - imgHeight;
// //      //       pdddPage();
// //             p//df.addImage(iata, "PNG", 0, position, imgWidth, i//mgHeight);
// /           heigh//tLeft -= pageght;
// //         }

// //         pdf.save("Resume.pdf");
// //     //

// //     return (
// //         <button
// //            on//ck={handleDownload}
// //           //lassNa
// / e//rult ResumeDown// load;

// // imp// ort jsPDF from "jspdf";

// // function//  ResumeDownload({ resumeData }) {
// //     const handleDownload = () => {
// //      //       orien// tation: "portrait",
// //      //        unit: "mm",//
// //     //      //    format: "a4"
// //         });

// //         const marginLeft = 20;
// //         let currentHeight = 20;

// //         doc.setFont("Helvetica", "bold");
// //         doc.setFontSize(16);
// //         doc.text(resumeData.name || "Your Name", marginLeft, currentHeight);
// //         currentHeight += 8;

// //         doc.setFont("Helvetica", "normal");
// //         doc.setFontSize(12);
// //         doc.text(`Email: ${resumeData.email}`, marginLeft, currentHeight);
// //         currentHeight += 6;
// //         doc.text(`Phone: ${resumeData.phone}`, marginLeft, currentHeight);
// //         currentHeight += 6;
// //         doc.text(`Location: ${resumeData.location}`, marginLeft, currentHeight);
// //         currentHeight += 10;

// //         // Summary
// //         if (resumeData.summary) {
// //             doc.setFont("Helvetica", "bold");
// //             doc.text("Professional Summary", marginLeft, currentHeight);
// //             currentHeight += 6;
// //             doc.setFont("Helvetica", "normal");
// //             doc.text(doc.splitTextToSize(resumeData.summary, 170), marginLeft, currentHeight);
// //             currentHeight += doc.getTextDimensions(resumeData.summary).h + 6;
// //         }

// //         // Skills
// //         if (resumeData.skills?.length) {
// //             doc.setFont("Helvetica", "bold");
// //             doc.text("Skills", marginLeft, currentHeight);
// //             currentHeight += 6;
// //             doc.setFont("Helvetica", "normal");
// //             doc.text("- " + resumeData.skills.join(", "), marginLeft, currentHeight);
// //             currentHeight += 10;
// //         }

// //         // Experience
// //         if (resumeData.experience?.length) {
// //             doc.setFont("Helvetica", "bold");
// //             doc.text("Experience", marginLeft, currentHeight);
// //             currentHeight += 6;
// //             doc.setFont("Helvetica", "normal");

// //             resumeData.experience.forEach((exp) => {
// //                 doc.text(`${exp.role} – ${exp.company} (${exp.duration})`, marginLeft, currentHeight);
// //                 currentHeight += 6;
// //                 doc.text(doc.splitTextToSize(exp.description, 170), marginLeft, currentHeight);
// //                 currentHeight += doc.getTextDimensions(exp.description).h + 6;
// //             });
// //         }

// //         doc.save("Resume.pdf");
// //     };

// //     return (
// //         <button
// //             onClick={handleDownload}
// //             className="px-4 py-2 mt-4 bg-blue-600 text-white rounded shadow"
// //         >
// //             Download ATS-Friendly Resume
// //         </button>
// //     );
// // }

// // export default ResumeDownload;
// import jsPDF from "jspdf";

// // Render
// {/* <ResumeDownload resumeData={resumeData} /> */}

// const ResumeDownload = () => {
//     const resumeData = {
//   name: "John Doe",
//   email: "john@example.com",
//   phone: "123-456-7890",
//   location: "Hyderabad, India",
//   summary: "Experienced developer skilled in JavaScript, React, and AWS.",
//   skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "TravelGo",
//       duration: "2024 – Present",
//       description: "Built a scalable booking platform using Flask and MongoDB. Integrated AWS services like EC2, SNS, and DynamoDB."
//     },
//     {
//       role: "Intern",
//       company: "ABC Corp",
//       duration: "2023 – 2024",
//       description: "Assisted in frontend development with React and improved performance by 25%."
//     }
//   ]
// };

//   const handleDownload = () => {
//     if (!resumeData || Object.keys(resumeData).length === 0) {
//       alert("Resume data is missing");
//       return;
//     }

//     const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

//     const marginLeft = 20;
//     let y = 20;

//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(18);
//     doc.text(resumeData.name || "Your Name", marginLeft, y);
//     y += 10;

//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(12);
//     doc.text(`Email: ${resumeData.email || "-"}`, marginLeft, y); y += 6;
//     doc.text(`Phone: ${resumeData.phone || "-"}`, marginLeft, y); y += 6;
//     doc.text(`Location: ${resumeData.location || "-"}`, marginLeft, y); y += 10;

//     if (resumeData.summary) {
//       doc.setFont("helvetica", "bold");
//       doc.text("Summary", marginLeft, y); y += 6;
//       doc.setFont("helvetica", "normal");
//       const summaryLines = doc.splitTextToSize(resumeData.summary, 170);
//       doc.text(summaryLines, marginLeft, y);
//       y += summaryLines.length * 6;
//     }

//     if (resumeData.skills?.length) {
//       doc.setFont("helvetica", "bold");
//       doc.text("Skills", marginLeft, y); y += 6;
//       doc.setFont("helvetica", "normal");
//       doc.text("- " + resumeData.skills.join(", "), marginLeft, y); y += 10;
//     }

//     if (resumeData.experience?.length) {
//       doc.setFont("helvetica", "bold");
//       doc.text("Experience", marginLeft, y); y += 6;
//       doc.setFont("helvetica", "normal");
//       resumeData.experience.forEach((exp) => {
//         doc.text(`${exp.role} – ${exp.company} (${exp.duration})`, marginLeft, y); y += 6;
//         const expLines = doc.splitTextToSize(exp.description, 170);
//         doc.text(expLines, marginLeft, y); y += expLines.length * 6;
//       });
//     }

//     doc.save("Resume.pdf");
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="px-4 py-2 mt-4 bg-green-600 text-white rounded shadow"
//     >
//       Download ATS-Friendly PDF
//     </button>
//   );
// };

// export default ResumeDownload;

import React from "react";
import jsPDF from "jspdf";

const ResumeDownload = ({ resumeData }) => {
  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const pageHeight = 297;
    const marginLeft = 20;
    const marginBottom = 20;
    let y = 20;
    const lineHeight = 6;

    // Helper to check if page break is needed
    const checkPageSpace = (linesCount) => {
      if (y + linesCount * lineHeight > pageHeight - marginBottom) {
        doc.addPage();
        y = 20;
      }
    };

    // Name and Role
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(resumeData.name || "Your Name", marginLeft, y);
    y += 8;
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    if (resumeData.role) {
      doc.text(resumeData.role, marginLeft, y);
      y += 8;
    }

    // Contact Info
    doc.setFontSize(12);
    if (resumeData.email) {
      doc.text(`Email: ${resumeData.email}`, marginLeft, y);
      y += lineHeight;
    }
    if (resumeData.phone) {
      doc.text(`Phone: ${resumeData.phone}`, marginLeft, y);
      y += lineHeight;
    }
    if (resumeData.linkedin) {
      doc.text(`LinkedIn: ${resumeData.linkedin}`, marginLeft, y);
      y += lineHeight;
    }
    if (resumeData.github) {
      doc.text(`GitHub: ${resumeData.github}`, marginLeft, y);
      y += lineHeight;
    }
    y += 2;

    // Education Section
    if (
      Array.isArray(resumeData.education) &&
      resumeData.education.length > 0
    ) {
      doc.setFont("helvetica", "bold");
      doc.text("Education", marginLeft, y);
      y += lineHeight;
      doc.setFont("helvetica", "normal");
      resumeData.education.forEach((edu) => {
        const eduLine = `${edu.instituteName || "Institute"} | ${
          edu.degree || "Degree"
        } ${edu.branch ? "- " + edu.branch : ""}`;
        checkPageSpace(2);
        doc.text(eduLine, marginLeft, y);
        y += lineHeight;
        const details = `Score: ${edu.scoreVal || "-"} ${edu.type || ""} | ${
          edu.from || ""
        }-${edu.to || ""}`;
        doc.text(details, marginLeft + 5, y);
        y += lineHeight;
      });
      y += 2;
    }

    // Skills Section
    if (Array.isArray(resumeData.skills) && resumeData.skills.length > 0) {
      doc.setFont("helvetica", "bold");
      doc.text("Skills", marginLeft, y);
      y += lineHeight;
      doc.setFont("helvetica", "normal");
      resumeData.skills.forEach((skill, idx) => {
        checkPageSpace(4);
        doc.text(
          `Programming Languages: ${skill.programmingLanguages || "-"}`,
          marginLeft,
          y
        );
        y += lineHeight;
        doc.text(
          `Libraries/Frameworks: ${skill.librariesFrameworks || "-"}`,
          marginLeft,
          y
        );
        y += lineHeight;
        doc.text(
          `Tools/Platforms: ${skill.toolsPlatforms || "-"}`,
          marginLeft,
          y
        );
        y += lineHeight;
        doc.text(`Databases: ${skill.databases || "-"}`, marginLeft, y);
        y += lineHeight;
        if (idx < resumeData.skills.length - 1) y += 2;
      });
      y += 2;
    }

    // Experience Section
    if (resumeData.experience) {
      doc.setFont("helvetica", "bold");
      doc.text("Experience", marginLeft, y);
      y += lineHeight;
      doc.setFont("helvetica", "normal");
      const expLines = doc.splitTextToSize(resumeData.experience, 170);
      checkPageSpace(expLines.length);
      doc.text(expLines, marginLeft, y);
      y += expLines.length * lineHeight + 2;
    }

    // Open Source Projects
    if (
      Array.isArray(resumeData.openSource) &&
      resumeData.openSource.length > 0
    ) {
      doc.setFont("helvetica", "bold");
      doc.text("Open Source Projects", marginLeft, y);
      y += lineHeight;
      doc.setFont("helvetica", "normal");
      resumeData.openSource.forEach((project) => {
        checkPageSpace(2);
        doc.text(project.projectName || "Project Name", marginLeft, y);
        y += lineHeight;
        const descLines = doc.splitTextToSize(project.description || "", 170);
        checkPageSpace(descLines.length);
        doc.text(descLines, marginLeft + 5, y);
        y += descLines.length * lineHeight;
      });
      y += 2;
    }

    doc.save("Resume.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 mt-4 bg-green-600 text-white rounded shadow"
    >
      Download ATS-Friendly PDF
    </button>
  );
};

export default ResumeDownload;
