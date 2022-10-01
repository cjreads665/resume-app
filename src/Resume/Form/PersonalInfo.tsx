import React from "react";

const PersonalInfo = () => {
  const fields = [
    {
      type: "text",
      name: "name",
      label: "Full Name",
      placeholder: "Ex: John Doe",
    },
    {
      type: "text",
      name: "place",
      label: "City,State",
      placeholder: "Ex: Kolkata, West Bengal",
    },
    {
      type: "email",
      name: "email",
      label: "Your Email (personal account)",
      placeholder: "Ex: cool@email.com",
    },
    {
      type: "tel",
      name: "phone",
      label: "Your Phone Number with country code",
      placeholder: "Ex: +91 9632587410",
    },
    {
      type: "url",
      name: "website",
      label: "Your Personal Website",
      placeholder: "Ex: www.someawesomesite.com",
    },
    {
      type: "textarea",
      name: "summary",
      label: "Professional Summary",
      placeholder: "Ex: Web Developer with 2 years of experience",
    },
  ];

  const list = fields.map((field: any) => {
    return (
      <div className="mb-6">
        <label
          htmlFor={field.name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          {field.label}
        </label>
        <input
          type={field.type}
          id={field.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
          placeholder={field.placeholder}
          required
        />
      </div>
    );
  });
  return <div>{list}</div>;
};

export default PersonalInfo;
