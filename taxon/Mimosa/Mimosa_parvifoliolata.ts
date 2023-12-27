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


// Description of Mimosa parvifoliolata
const Mimosa_parvifoliolata = new Mimosa()
Mimosa_parvifoliolata.specificEpithet = 'parvifoliolata'

Mimosa_parvifoliolata.stems = new Stems()

Mimosa_parvifoliolata.stipule = new Stipule()
Mimosa_parvifoliolata.stipule.margin = new MarginStipule()
Mimosa_parvifoliolata.stipule.adaxial = new AdaxialStipule()
Mimosa_parvifoliolata.stipule.abaxial = new AbaxialStipule()

Mimosa_parvifoliolata.leaf = new Leaf()
Mimosa_parvifoliolata.leaf.petiole = new Petiole()
Mimosa_parvifoliolata.leaf.bipinnate = new Bipinnate()
Mimosa_parvifoliolata.leaf.bipinnate.rachis = new Rachis()
Mimosa_parvifoliolata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_parvifoliolata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 13)
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 16)
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_parvifoliolata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_parvifoliolata.inflorescence = new Inflorescence()
Mimosa_parvifoliolata.inflorescence.peduncle = new Peduncle()
Mimosa_parvifoliolata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_parvifoliolata.flower = new Flower()
Mimosa_parvifoliolata.flower.bracteole = new Bracteole()
Mimosa_parvifoliolata.flower.merism = '4-merous'
Mimosa_parvifoliolata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_parvifoliolata.flower.calyx = new Calyx()
Mimosa_parvifoliolata.flower.calyx.shape = 'campanulate'
Mimosa_parvifoliolata.flower.corolla = new Corolla()
Mimosa_parvifoliolata.flower.corolla.shape = 'vase-shaped'

Mimosa_parvifoliolata.androecium = new Androecium()
Mimosa_parvifoliolata.androecium.filaments = new Filaments()
Mimosa_parvifoliolata.androecium.filaments.colour = 'whitenish'

Mimosa_parvifoliolata.ginoecium = new Ginoecium()
Mimosa_parvifoliolata.ginoecium.ovary = new Ovary()

Mimosa_parvifoliolata.fruit = new Fruit()
Mimosa_parvifoliolata.fruit.stipe = new Stipe()
Mimosa_parvifoliolata.fruit.replum = new Replum()
Mimosa_parvifoliolata.fruit.epicarp = new Epicarp()

Mimosa_parvifoliolata.seed = new Seed()


// Description authorship
Mimosa_parvifoliolata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_parvifoliolata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa parvifoliolata
export { Mimosa_parvifoliolata }