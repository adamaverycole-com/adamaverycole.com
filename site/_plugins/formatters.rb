require "base64"
module Jekyll
    module ResumeFormatters
        def generateUniqueIdForJobHistoryElement(object)
            hash = object.hash % rand()
            Base64.encode64("__#{hash}").scan(/[A-z0-9]*/i)[0]
        end
    end
end

Liquid::Template.register_filter(Jekyll::ResumeFormatters)