import SDKIntegrationCard from "../cards/sdk-integration-card";

const UsageSection = () => {
  return (
    <section
      className="w-full pt-100 pb-50 2xl:pt-0 min-h-screen flex-center bg-bg-2"
      id="usage"
    >
      <div className="w-full flex-center flex-col text-center gap-50 2xl:gap-80">
        <div className="flex-center flex-col text-center gap-12 2xl:gap-18">
          <h2 className="font-bold text-40 2xl:text-70 leading-tight">
            Simple <span className="text-gradient">API Integration</span>
          </h2>
          <p className="text-white/60 font-normal text-18 2xl:text-24 leading-normal mx-auto">
            Integrate secure authentication into your applications with just a
            few lines of code
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-start gap-24 2xl:gap-35 px-24 2xl:px-50 mx-auto">
          {apiSteps.map((step, index) => (
            <SDKIntegrationCard
              key={index}
              index={index}
              title={step.title}
              code={step.code}
              className="w-fit"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageSection;

const apiSteps = [
  {
    title: "Install SDK",
    code: `npm install authwave-sdk\n`,
  },
  {
    title: "Initialize Project",
    code: `import { AuthService } from 'authwave-sdk';\n\nconst authService = new AuthService({\n  projectId: 'your-project-id',\n  projectKey: 'your-project-key'\n});`,
  },
  {
    title: "Implement Authentication",
    code: `try {
        const response = await authService.createAccount(
            "john doe", 
            "johndoe@gmail.com", 
            "Test123456@"
        );
        console.log("Account created successfully:", response);
    } catch (error) {
        console.error("Error creating account:", error);
    }`,
  },
];
