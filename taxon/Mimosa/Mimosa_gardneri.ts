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


// Description of Mimosa gardneri
const Mimosa_gardneri = new Mimosa()
Mimosa_gardneri.specificEpithet = 'gardneri'

Mimosa_gardneri.stems = new Stems()

Mimosa_gardneri.stipule = new Stipule()
Mimosa_gardneri.stipule.margin = new MarginStipule()
Mimosa_gardneri.stipule.adaxial = new AdaxialStipule()
Mimosa_gardneri.stipule.abaxial = new AbaxialStipule()

Mimosa_gardneri.leaf = new Leaf()
Mimosa_gardneri.leaf.petiole = new Petiole()
Mimosa_gardneri.leaf.bipinnate = new Bipinnate()
Mimosa_gardneri.leaf.bipinnate.rachis = new Rachis()
Mimosa_gardneri.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_gardneri.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_gardneri.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(20, 25)
Mimosa_gardneri.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_gardneri.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_gardneri.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_gardneri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 22)
Mimosa_gardneri.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_gardneri.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_gardneri.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_gardneri.inflorescence = new Inflorescence()
Mimosa_gardneri.inflorescence.peduncle = new Peduncle()
Mimosa_gardneri.inflorescence.capitate = new CapitateInflorescence()

Mimosa_gardneri.flower = new Flower()
Mimosa_gardneri.flower.bracteole = new Bracteole()
Mimosa_gardneri.flower.calyx = new Calyx()
Mimosa_gardneri.flower.corolla = new Corolla()
Mimosa_gardneri.flower.corolla.shape = 'vase-shaped'

Mimosa_gardneri.androecium = new Androecium()
Mimosa_gardneri.androecium.filaments = new Filaments()
Mimosa_gardneri.androecium.filaments.colour = 'pinkish'

Mimosa_gardneri.ginoecium = new Ginoecium()
Mimosa_gardneri.ginoecium.ovary = new Ovary()

Mimosa_gardneri.fruit = new Fruit()
Mimosa_gardneri.fruit.stipe = new Stipe()
Mimosa_gardneri.fruit.replum = new Replum()
Mimosa_gardneri.fruit.epicarp = new Epicarp()

Mimosa_gardneri.seed = new Seed()


// Description authorship
Mimosa_gardneri.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_gardneri.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa gardneri
export { Mimosa_gardneri }