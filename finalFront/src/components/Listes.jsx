import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { getStudentApi } from "./../api/getStudentApi";
import { Link } from "react-router-dom";
import { deleteStudentApi } from './../api/deleteStudent';

const head = [
  { name: "Name" },
  { name: "Address" },
  { name: "Date of birth" },
  { name: "Image" },
  { name: "Action" },
];

const Listes = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudentApiSpring = async () => {
      try {
        const response = await getStudentApi();
        if (response) {
          const data = response;
          setStudents(data);
        } else {
          console.log("echec");
        }
      } catch (error) {
        console.error("Erreur lors de l'appel à l'API:", error);
      }
    };
    getStudentApiSpring();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudentApi(id);

      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'étudiant:", error);
    }
  }
  const stylePaper = {
    padding: "20px",
    margin: "20px auto",
    width: "600px",
    height: "auto",
  };

  console.log(students);
  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={stylePaper}>
        <h1 className="text-center text-2xl mb-3">Student list</h1>
        <hr className="border-blue-500 mx-auto" />
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      {head.map((item, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {students.length > 0 ? (
                      students.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                            {item.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                            {item.dob}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                            <img
                              src={
                                item.profileImage
                                  ? `/images/${item.profileImage}`
                                  : "chemin_vers_image_par_defaut"
                              }
                              alt={item.name}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                           
                             <button onClick={() => handleDelete(item.id)}>
                              Delete
                            </button>
                           
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>Vide</td>
                      </tr>
                    )}
                  </tbody>
                  <Link
                    to={"/"}
                    className="inline-flex items-center gap-x-1 text-sm text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to home
                  </Link>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default Listes;
