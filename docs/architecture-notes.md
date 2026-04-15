# Architecture Notes

- Backend uses feature-based MVC under `server/src/modules`
- Shared middleware, utilities, and validations are kept outside modules
- AI prediction logic lives in `server/src/ai` to isolate analytics concerns
- Frontend separates route pages, reusable components, layouts, and feature slices
- Route versioning starts at `/api/v1` for long-term API evolution

