// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa aculeaticarpa
const Mimosa_aculeaticarpa = new Mimosa()
Mimosa_aculeaticarpa.specificEpithet = 'aculeaticarpa'

Mimosa_aculeaticarpa.stems = new Stems()

Mimosa_aculeaticarpa.stipule = new Stipule()
Mimosa_aculeaticarpa.stipule.margin = new MarginStipule()
Mimosa_aculeaticarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_aculeaticarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_aculeaticarpa.leaf = new Leaf()
Mimosa_aculeaticarpa.leaf.petiole = new Petiole()
Mimosa_aculeaticarpa.leaf.bipinnate = new Bipinnate()
Mimosa_aculeaticarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_aculeaticarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aculeaticarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aculeaticarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aculeaticarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aculeaticarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aculeaticarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aculeaticarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aculeaticarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_aculeaticarpa.inflorescence = new Inflorescence()
Mimosa_aculeaticarpa.inflorescence.peduncle = new Peduncle()
Mimosa_aculeaticarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_aculeaticarpa.flower = new Flower()
Mimosa_aculeaticarpa.flower.bracteole = new Bracteole()
Mimosa_aculeaticarpa.flower.merism = '5-merous'
Mimosa_aculeaticarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_aculeaticarpa.flower.calyx = new Calyx()
Mimosa_aculeaticarpa.flower.calyx.shape = 'campanulate'
Mimosa_aculeaticarpa.flower.corolla = new Corolla()
Mimosa_aculeaticarpa.flower.corolla.shape = 'vase-shaped'

Mimosa_aculeaticarpa.androecium = new Androecium()
Mimosa_aculeaticarpa.androecium.filaments = new Filaments()
Mimosa_aculeaticarpa.androecium.filaments.colour = 'whitenish'

Mimosa_aculeaticarpa.ginoecium = new Ginoecium()
Mimosa_aculeaticarpa.ginoecium.ovary = new Ovary()

Mimosa_aculeaticarpa.fruit = new Fruit()
Mimosa_aculeaticarpa.fruit.stipe = new Stipe()
Mimosa_aculeaticarpa.fruit.replum = new Replum()
Mimosa_aculeaticarpa.fruit.epicarp = new Epicarp()

Mimosa_aculeaticarpa.seed = new Seed()


// Description authorship
Mimosa_aculeaticarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aculeaticarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa aculeaticarpa
export { Mimosa_aculeaticarpa }